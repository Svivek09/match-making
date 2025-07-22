require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Customer = require('./models/Customer');
const Gig = require('./models/Gig');
const Talent = require('./models/Talent');

const app = express();
const allowedOrigins = process.env.FRONTEND_URL
  ? process.env.FRONTEND_URL.split(',').map(url => url.trim())
  : [];
app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/matchmaking', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected');
});

const talentRoutes = require('./routes/talentRoutes');
const matchRoutes = require('./routes/matchRoutes');
const customerRoutes = require('./routes/customerRoutes');
const gigRoutes = require('./routes/gigRoutes');

app.use('/api/talents', talentRoutes);
app.use('/api/match', matchRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/gigs', gigRoutes);

// Health check
app.get('/', (req, res) => {
  res.send('Matchmaking backend running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

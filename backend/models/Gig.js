const mongoose = require('mongoose');

const gigSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  location: String,
  budget: Number,
  stylePrefs: [String],
  category: String,
  startDate: Date,
  endDate: Date,
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
});

module.exports = mongoose.model('Gig', gigSchema); 
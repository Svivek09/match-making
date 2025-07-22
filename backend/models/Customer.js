const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ['creator', 'startup', 'individual'], required: true },
  email: { type: String, required: true },
  company: String,
});

module.exports = mongoose.model('Customer', customerSchema); 
const mongoose = require('mongoose');

const talentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: String,
  categories: [String],
  skills: [String],
  experience: Number, // years
  budgetRange: {
    min: Number,
    max: Number,
  },
  portfolioLinks: [String],
  styles: [String],
});

module.exports = mongoose.model('Talent', talentSchema); 
const Talent = require('../models/Talent');

// Create new talent
exports.createTalent = async (req, res) => {
  try {
    const talent = new Talent(req.body);
    await talent.save();
    res.status(201).json(talent);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all talents
exports.getTalents = async (req, res) => {
  try {
    const talents = await Talent.find();
    res.json(talents);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


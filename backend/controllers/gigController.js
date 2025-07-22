const Gig = require('../models/Gig');

// Create new gig
exports.createGig = async (req, res) => {
  try {
    const gig = new Gig(req.body);
    await gig.save();
    res.status(201).json(gig);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all gigs
exports.getGigs = async (req, res) => {
  try {
    const gigs = await Gig.find();
    res.json(gigs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get gig by ID
exports.getGigById = async (req, res) => {
  try {
    const gig = await Gig.findById(req.params.id);
    if (!gig) return res.status(404).json({ error: 'Gig not found' });
    res.json(gig);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update gig
exports.updateGig = async (req, res) => {
  try {
    const gig = await Gig.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!gig) return res.status(404).json({ error: 'Gig not found' });
    res.json(gig);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete gig
exports.deleteGig = async (req, res) => {
  try {
    const gig = await Gig.findByIdAndDelete(req.params.id);
    if (!gig) return res.status(404).json({ error: 'Gig not found' });
    res.json({ message: 'Gig deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}; 
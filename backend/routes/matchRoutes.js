const express = require('express');
const router = express.Router();
const matchController = require('../controllers/matchController');

router.post('/', matchController.matchTalents);
router.get('/', (req, res) => {
  res.json({ message: 'Matchmaking API is running. Use POST to get matches.' });
});

module.exports = router; 
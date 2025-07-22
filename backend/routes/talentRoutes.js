const express = require('express');
const router = express.Router();
const talentController = require('../controllers/talentController');

router.post('/', talentController.createTalent);
router.get('/', talentController.getTalents);

module.exports = router; 
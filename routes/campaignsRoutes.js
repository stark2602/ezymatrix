const express = require('express');
const { getCampaigns } = require('../controllers/campaignsController');
const router = express.Router();

router.get('/', getCampaigns);

module.exports = router;

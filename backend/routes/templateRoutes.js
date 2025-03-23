// backend/routes/templateRoutes.js
const express = require('express');
const router = express.Router();
const templateController = require('../controllers/templateController');

// Routes for admin panel (secure these with a simple check if needed)
router.post('/', templateController.createTemplate);
router.get('/', templateController.getTemplates);
// Add PUT and DELETE routes here

module.exports = router;

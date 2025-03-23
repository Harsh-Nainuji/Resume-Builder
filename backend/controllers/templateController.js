// backend/controllers/templateController.js
const Template = require('../models/Template');

exports.createTemplate = async (req, res) => {
  try {
    const { name, htmlContent, cssContent, previewImage } = req.body;
    const template = new Template({ name, htmlContent, cssContent, previewImage });
    await template.save();
    res.status(201).json({ success: true, data: template });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.getTemplates = async (req, res) => {
  try {
    const templates = await Template.find({});
    res.status(200).json({ success: true, data: templates });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Add updateTemplate and deleteTemplate as needed...

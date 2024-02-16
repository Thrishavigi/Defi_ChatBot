// backend/routes/chatRoutes.js
const express = require('express');
const chatController = require('../controllers/chatController');
const router = express.Router();

router.post('/send-message', chatController.sendMessage);

module.exports = router;

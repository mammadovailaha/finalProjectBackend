
// routes/chatbotRoutes.js
const express = require("express");
const router = express.Router();
const chatbotController = require("../controllers/chatbotController");

// Mesaj göndər
router.post("/", chatbotController.sendMessage);

// Söhbət tarixçəsini al
router.get("/history", chatbotController.getHistory);

// Söhbət tarixçəsini təmizlə
router.post("/clear", chatbotController.clearHistory);

module.exports = router;
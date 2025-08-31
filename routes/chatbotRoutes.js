const express = require("express");
const router = express.Router();
const chatbotController = require("../controllers/chatbotController");

router.post("/", chatbotController.sendMessage);
router.get("/history", chatbotController.getHistory);
router.post("/clear", chatbotController.clearHistory);

module.exports = router;

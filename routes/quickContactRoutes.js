const express = require("express");
const router = express.Router();
const quickContactController = require("../controllers/quickContactController");

router.post("/", quickContactController.createQuickContact);
router.get("/", quickContactController.getAllContacts); // istəyə bağlıdır

module.exports = router;

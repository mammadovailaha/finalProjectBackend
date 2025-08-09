// routes/examResults.js
const express = require("express");
const router = express.Router();
const { addExamResult, getExamResult } = require("../controllers/examResultController");

router.post("/add", addExamResult);
router.post("/get", getExamResult);

module.exports = router;


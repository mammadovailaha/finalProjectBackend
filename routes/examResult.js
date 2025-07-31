// routes/examResults.js
const express = require("express");
const router = express.Router();
const { getExamResult } = require("../controllers/examResultController");

router.post("/", getExamResult); // POST /api/exam-results

module.exports = router;

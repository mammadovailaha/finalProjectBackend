// models/ExamResult.js
const mongoose = require("mongoose");

const examResultSchema = new mongoose.Schema({
  exam: { type: String, required: true },
  bookletNumber: { type: String, required: true },
  score: { type: Number, required: true }, 
  name: { type: String }, 
});

module.exports = mongoose.model("ExamResult", examResultSchema);

const mongoose = require("mongoose");

const quickContactSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  phone: { type: String, required: true },
  branch: { type: String, required: true },
  hasWhatsapp: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("QuickContact", quickContactSchema);

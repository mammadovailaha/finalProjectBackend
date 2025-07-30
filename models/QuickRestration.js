const mongoose = require("mongoose");

const quickRegistrationSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  phone: { type: String, required: true },
  note: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("QuickRegistration", quickRegistrationSchema);

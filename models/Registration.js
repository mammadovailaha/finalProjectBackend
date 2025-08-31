const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  name: String,
  surname: String,
  phone: String,
  course: String,
  branch: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Registration", registrationSchema);

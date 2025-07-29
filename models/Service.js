const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  url: String,
}, { timestamps: true });

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;

const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  universityLogos: [{ type: String }],
});

module.exports = mongoose.model("Country", countrySchema);

const mongoose = require("mongoose");

const branchSchema = new mongoose.Schema({
  branch_name: { type: String, required: true },
  start_date: { type: String},
  description: { type: String },
  services: [{ type: String }],
  locations: [
    {
      address: { type: String, required: true },
      phone1: { type: String, required: true },
      phone2: { type: String },
    },
  ],
  map_embed: { type: String },
  social_media: [{ type: String }],
});

module.exports = mongoose.model("Branch", branchSchema);

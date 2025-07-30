const mongoose = require("mongoose");

const vacancySchema = new mongoose.Schema({
  title: { type: String, required: true },
  postedDate: { type: Date, required: true },
  deadline: { type: Date, required: true },
  description: { type: String },
  requirements: { type: String },
  responsibilities: { type: String },
  benefits: { type: String },
  additionalInfo: {
    documentation: { type: String },
    experience: { type: String },
    education: { type: String },
    languages: [{ type: String }],
    computerSkills: { type: String },
    salary: { type: String },
  },
});

module.exports = mongoose.model("Vacancy", vacancySchema);

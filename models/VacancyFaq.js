const mongoose = require("mongoose");
const videoSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true, 
    },
    answer: {
        type: String,
        required: true,
    },
}, { timestamps: true }
);

const VacancyFaq = mongoose.model("VacancyFaq", videoSchema);
module.exports = VacancyFaq;

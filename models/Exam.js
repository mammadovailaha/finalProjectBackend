const mongoose = require("mongoose");

const examSchema=new mongoose.Schema({
    examName: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    examType: {
        type: String,
        required: true,
    },
    examTime: {
        type: String,
        required: true,
    },
});

const Exam = mongoose.model("Exam", examSchema);

module.exports = Exam;

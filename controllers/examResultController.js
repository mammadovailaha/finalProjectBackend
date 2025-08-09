// controllers/examResultController.js
const ExamResult = require("../models/ExamResult");

const getExamResult = async (req, res) => {
  try {
    const { exam, bookletNumber } = req.body;

    const result = await ExamResult.findOne({ exam, bookletNumber });

    if (!result) {
      return res.status(404).json({ message: "Nəticə tapılmadı" });
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Server xətası", error });
  }
};



const addExamResult = async (req, res) => {
  try {
    const { exam, bookletNumber, score, name } = req.body;

    if (!exam || !bookletNumber || score === undefined) {
      return res.status(400).json({ message: "exam, bookletNumber və score mütləqdir" });
    }

    const newResult = new ExamResult({ exam, bookletNumber, score, name });
    await newResult.save();

    res.status(201).json({ message: "Nəticə əlavə edildi", result: newResult });
  } catch (error) {
    res.status(500).json({ message: "Server xətası", error: error.message });
  }
};

module.exports = { addExamResult, getExamResult };

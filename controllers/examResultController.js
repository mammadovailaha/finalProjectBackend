// controllers/examResultController.js
const ExamResult = require("../models/ExamResult");

const getExamResult = async (req, res) => {
  try {
    const { exam, bookletNumber } = req.body;

    const result = await ExamResult.findOne({ exam, bookletNumber, score, name });

    if (!result) {
      return res.status(404).json({ message: "Nəticə tapılmadı" });
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Server xətası", error });
  }
};

module.exports = { getExamResult };

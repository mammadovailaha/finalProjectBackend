// let exams=[
//   {
//     id: 3,
//     examName: "MİQ Hazırlıq İmtahanı",
//     date: "18 May 13:30",
//     examType: "Əyani",
//     examTime: "90 dəqiqə",
//   }
// ]

const Exam = require("../models/Exam");

// ✅ Bütün imtahanları gətir
const getAllExams = async (req, res) => {
    try {
        const exams = await Exam.find();
        res.json(exams);
    } catch (error) {
        res.status(500).json({ message: "Xəta baş verdi", error });
    }
};

// ✅ Yeni imtahan yarat
const createExam = async (req, res) => {    
    const { examName, date, examType, examTime } = req.body;

    if (!examName || !date || !examType || !examTime) {
        return res.status(400).json({ message: "Bütün sahələr doldurulmalıdır" });
    }

    try {
        const newExam = new Exam({ examName, date, examType, examTime });
        await newExam.save();
        res.status(201).json(newExam);
    } catch (error) {
        res.status(500).json({ message: "Xəta baş verdi", error });
    }
}
 const updateExam = async (req, res) => {
    const { id } = req.params;
    const { examName, date, examType, examTime } = req.body;

    try {
        const updatedExam = await Exam.findByIdAndUpdate(
            id,
            { examName, date, examType, examTime },
            { new: true }
        );

        if (!updatedExam) {
            return res.status(404).json({ message: "İmtahan tapılmadı" });
        }

        res.json(updatedExam);
    } catch (error) {
        res.status(500).json({ message: "Xəta baş verdi", error });
    }
};
const deleteExam = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedExam = await Exam.findByIdAndDelete(id);

        if (!deletedExam) {
            return res.status(404).json({ message: "İmtahan tapılmadı" });
        }

        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: "Xəta baş verdi", error });
    }
};
const getExamById = async (req, res) => {
    const { id } = req.params;

    try {
        const exam = await Exam.findById(id);
        if (!exam) {
            return res.status(404).json({ message: "İmtahan tapılmadı" });
        }
        res.json(exam);
    } catch (error) {
        res.status(500).json({ message: "Xəta baş verdi", error });
    }
};

module.exports = {
    getAllExams,
    createExam,
    updateExam,
    deleteExam,
    getExamById
};
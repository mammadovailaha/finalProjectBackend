const express = require("express");
const router = express.Router();
const {
    getAllExams,
    createExam,
    updateExam,
    deleteExam,
    getExamById
} = require("../controllers/examsController");

router.get("/", getAllExams); // Bütün imtahanları gətir
router.post("/", createExam); // Yeni imtahan yarat
router.get("/:id", getExamById); // İmtahanı ID-ə görə gətir
router.put("/:id", updateExam); // İmtahanı ID-ə görə yenilə
router.delete("/:id", deleteExam); // İmtahanı ID-ə görə sil

module.exports = router;

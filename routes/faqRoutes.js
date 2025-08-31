const express = require("express");
const router = express.Router();
const {
  getAllFaqs,
  createFaq,
  getFaqById,
  updateFaq,
  deleteFaq,
} = require("../controllers/faqController");

router.get("/", getAllFaqs);         // Bütün FAQ-lar
router.post("/", createFaq);         // Yeni FAQ yarat
router.get("/:id", getFaqById);      // ID-ə görə FAQ
router.put("/:id", updateFaq);       // FAQ yenilə
router.delete("/:id", deleteFaq);    // FAQ sil

module.exports = router;

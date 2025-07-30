const express = require("express");
const router = express.Router();
const {
    getAllVacancyFaqs,
    createVacancyFaq,
    updateVacancyFaq,
    deleteVacancyFaq,
    getVacancyFaqById
} = require("../controllers/vacanciesFaqController");

router.get("/", getAllVacancyFaqs);
router.post("/", createVacancyFaq);
router.put("/:id", updateVacancyFaq);
router.delete("/:id", deleteVacancyFaq);
router.get("/:id", getVacancyFaqById);

module.exports = router;

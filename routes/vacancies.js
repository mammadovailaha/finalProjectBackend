const express = require("express");
const router = express.Router();
const vacancyController = require("../controllers/vacancyController");

router.post("/", vacancyController.createVacancy);
router.get("/", vacancyController.getVacancies);
router.get("/:id", vacancyController.getVacancyById);
router.put("/:id", vacancyController.updateVacancy);
router.delete("/:id", vacancyController.deleteVacancy);

module.exports = router;

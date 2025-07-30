const express = require("express");
const router = express.Router();
const quickRegistrationController = require("../controllers/quickRegistrationController");

router.post("/", quickRegistrationController.createRegistration);
router.get("/", quickRegistrationController.getAllRegistrations); // optional

module.exports = router;

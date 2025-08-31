const express = require("express");
const router = express.Router();
const {
  getAllServices,
  createService,
  updateService,
  deleteService
} = require("../controllers/servicesController"); // controller faylından

// Routes
router.get("/", getAllServices);
router.post("/", createService);
router.put("/:id", updateService);
router.delete("/:id", deleteService);

module.exports = router;

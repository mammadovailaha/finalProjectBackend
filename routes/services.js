const express = require("express");
const router = express.Router();

// Controller-ları import et
const {
  getAllServices,
  createService,
  updateService,
  deleteService
} = require("../controllers/servicesController");

// Route-lar
router.get("/", getAllServices);
router.post("/", createService);
router.put("/:id", updateService);
router.delete("/:id", deleteService);

// Router-i export et
module.exports = router;

const express = require("express");
const router = express.Router();

const {
  getAllServices,
  createService,
  updateService,
  deleteService,
} = require("../controllers/servicesController");

// Bütün servisləri gətir
router.get("/", getAllServices);

// Yeni servis yarat
router.post("/", createService);

// Servisi ID-ə görə yenilə
router.put("/:id", updateService);

// Servisi ID-ə görə sil
router.delete("/:id", deleteService);

module.exports = router;

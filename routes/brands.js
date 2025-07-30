const express = require("express");
const router = express.Router();
const {
    getAllBrands,
    createBrand,
    updateBrand,
    deleteBrand,
    getBrandById
} = require("../controllers/brandsController");

router.get("/", getAllBrands);
router.post("/", createBrand);
router.put("/:id", updateBrand);
router.delete("/:id", deleteBrand);
router.get("/:id", getBrandById);

module.exports = router;
const express = require("express");
const router = express.Router();
const {
    getAllStaff,
    createStaff,
    getStaffById,
    updateStaffById,
    deleteStaffById
} = require("../controllers/staffController");

router.get("/", getAllStaff);
router.post("/", createStaff);
router.get("/:id", getStaffById);
router.put("/:id", updateStaffById);
router.delete("/:id", deleteStaffById);
module.exports = router;
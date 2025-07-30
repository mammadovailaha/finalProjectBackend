const express = require("express");
const router = express.Router();
const {
    getAllPartners,
    createPartner,
    updatePartner,
    deletePartner,
    getPartnerById
} = require("../controllers/partnersController");

router.get("/", getAllPartners);
router.post("/", createPartner);
router.put("/:id", updatePartner);
router.delete("/:id", deletePartner);
router.get("/:id", getPartnerById);

module.exports = router;

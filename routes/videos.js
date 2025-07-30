const express = require("express");
const router = express.Router();

const {
    getAllVideos,
    createVideo,
    updateVideo,
    deleteVideo,
    getVideoById
} = require("../controllers/videosController");

router.get("/", getAllVideos);
router.post("/", createVideo);
router.put("/:id", updateVideo);
router.delete("/:id", deleteVideo);
router.get("/:id", getVideoById);

module.exports = router;
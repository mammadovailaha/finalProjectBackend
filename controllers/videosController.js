const Video = require("../models/Video");

// ✅ Bütün videoları gətir
const getAllVideos = async (req, res) => {
    try {
        const videos = await Video.find();
        res.json(videos);
    } catch (error) {
        res.status(500).json({ message: "Xəta baş verdi", error });
    }
};
// ✅ Yeni video yarat
const createVideo = async (req, res) => {
    try {
        const newVideo = new Video(req.body);
        await newVideo.save();
        res.status(201).json(newVideo);
    } catch (error) {
        res.status(500).json({ message: "Xəta baş verdi", error });
    }
};
// ✅ Mövcud videonu yenilə
const updateVideo = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedVideo = await Video.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedVideo);
    } catch (error) {
        res.status(500).json({ message: "Xəta baş verdi", error });
    }
};
// ✅ Mövcud videonu sil
const deleteVideo = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedVideo = await Video.findByIdAndDelete(id);
        if (!deletedVideo) {
            return res.status(404).json({ message: "Video tapılmadı" });
        }
        res.json({ message: "Video silindi" });
    } catch (error) {
        res.status(500).json({ message: "Xəta baş verdi", error });
    }
};
// ✅ ID-ə görə video gətir
const getVideoById = async (req, res) => {
    const { id } = req.params;
    try {
        const video = await Video.findById(id);
        if (!video) {
            return res.status(404).json({ message: "Video tapılmadı" });
        }
        res.json(video);
    } catch (error) {
        res.status(500).json({ message: "Xəta baş verdi", error });
    }
};
module.exports = {
    getAllVideos,
    createVideo,
    updateVideo,
    deleteVideo,
    getVideoById
};
const mongoose = require("mongoose");
const videoSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    src:{
        type:String,
        required: true,
    }
}, { timestamps: true });
const Video = mongoose.models.Video || mongoose.model("Video", videoSchema);
module.exports = Video;
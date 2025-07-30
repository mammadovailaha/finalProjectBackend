const mongoose = require("mongoose");
const parterSchema = new mongoose.Schema({
    img:{
        type: String,
        required: true  
    },
    alt:{
        type: String,
        required: true  
    }
}, { timestamps: true });

const Partner = mongoose.model("Partner", parterSchema);
module.exports = Partner;
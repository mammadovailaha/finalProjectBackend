const mongoose=require("mongoose");

const staffSchema=new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
    },
    src:{
        type:String,
        required:true,
    }
}, {timestamps:true});
const Staff=mongoose.model("Staff", staffSchema);
module.exports=Staff;
const express=require("express");

const router=express.Router();
const { sendMessage } = require("../controllers/chatbotController");

router=("/", sendMessage);

module.exports=router
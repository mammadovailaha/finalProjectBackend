// models/Message.js
const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  userMessage: { 
    type: String, 
    required: true 
  },
  botReply: { 
    type: String, 
    required: true 
  },
  sessionId: {
    type: String,
    default: 'default',
    index: true
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

// İndeks əlavə et (performans üçün)
messageSchema.index({ sessionId: 1, createdAt: -1 });

module.exports = mongoose.model("Message", messageSchema);

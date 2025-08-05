const Message = require("../models/Message");

const sendMessage = async (req, res) => {
  try {
    const { userMessage } = req.body;

    if (!userMessage) {
      return res.status(400).json({ error: "userMessage göndərilməyib" });
    }

    // Botun cavabını burada sadə yazırıq (hazırda ağıllı deyil)
    const botReply = `Sən dedin: ${userMessage}`;

    // Mesajı DB-ya qeyd et
    const newMessage = new Message({
      userMessage,
      botReply
    });

    await newMessage.save();

    res.json({ userMessage, botReply });
  } catch (error) {
    console.error("Chatbot xətası:", error);
    res.status(500).json({ error: "Server xətası" });
  }
};

module.exports = { sendMessage };

const Message=require("../models/Message");
const GetBotReply=(message)=>{
if(message.toLowerCase().includes("salam")) return "Salam! Necə kömək edə bilərəm?";
if(message.toLowerCase().includes("kurs")) return "Hazırda davam edən kurslarımız haqqında məlumat istəyirsiniz?";
  return "Bağışlayın, sualınızı tam anlamadım.";
}

const sendMessage = async (req, res) => {
  try {
    const { userMessage } = req.body;
    const botReply = getBotReply(userMessage);

    const newMessage = new Message({ userMessage, botReply });
    await newMessage.save();

    res.status(200).json({ success: true, reply: botReply });
  } catch (error) {
    res.status(500).json({ success: false, message: "Xəta baş verdi", error });
  }
};

module.exports = { sendMessage };
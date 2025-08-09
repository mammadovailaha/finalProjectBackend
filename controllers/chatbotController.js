// controllers/chatbotController.js
const Message = require("../models/Message");
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Gemini AI konfiqurasiyası
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Söhbət tarixçəsi saxlamaq üçün (sessiya əsaslı)
const chatSessions = new Map();

const sendMessage = async (req, res) => {
  try {
    const { userMessage, sessionId = 'default' } = req.body;

    if (!userMessage) {
      return res.status(400).json({ error: "userMessage göndərilməyib" });
    }

    // Sessiya tarixçəsini al və ya yarat
    if (!chatSessions.has(sessionId)) {
      chatSessions.set(sessionId, []);
    }
    const history = chatSessions.get(sessionId);

    try {
      // AI-dan cavab al
      const chat = model.startChat({
        history: history.map(msg => ({
          role: msg.role,
          parts: [{ text: msg.text }]
        })),
        generationConfig: {
          maxOutputTokens: 500,
          temperature: 0.7,
        },
      });

      // Azərbaycan dilində cavab vermək üçün prompt
      const prompt = `Sən Azərbaycan dilində danışan köməkçi chatbotsan. 
      İstifadəçinin sualına məntiqli və faydalı cavab ver.
      İstifadəçi deyir: ${userMessage}`;

      const result = await chat.sendMessage(prompt);
      const botReply = result.response.text();

      // Tarixçəyə əlavə et
      history.push(
        { role: 'user', text: userMessage },
        { role: 'model', text: botReply }
      );

      // Tarixçəni məhdudlaşdır (son 10 mesaj)
      if (history.length > 20) {
        history.splice(0, 2);
      }

      // Mesajı DB-ya qeyd et
      const newMessage = new Message({
        userMessage,
        botReply,
        sessionId
      });

      await newMessage.save();

      res.json({ 
        userMessage, 
        botReply,
        sessionId 
      });

    } catch (aiError) {
      console.error("AI xətası:", aiError);
      
      // AI işləməsə sadə cavab ver
      const fallbackReply = getFallbackReply(userMessage);
      
      const newMessage = new Message({
        userMessage,
        botReply: fallbackReply,
        sessionId
      });

      await newMessage.save();

      res.json({ 
        userMessage, 
        botReply: fallbackReply,
        sessionId,
        warning: "AI hazırda əlçatan deyil, sadə cavab verildi" 
      });
    }

  } catch (error) {
    console.error("Chatbot xətası:", error);
    res.status(500).json({ error: "Server xətası" });
  }
};

// Sadə cavab generatoru (AI işləməyəndə)
const getFallbackReply = (userMessage) => {
  const lowerMessage = userMessage.toLowerCase();
  
  if (lowerMessage.includes("salam") || lowerMessage.includes("hello")) {
    return "Salam! Sizə necə kömək edə bilərəm?";
  }
  if (lowerMessage.includes("necəsən") || lowerMessage.includes("necesen")) {
    return "Təşəkkür edirəm, yaxşıyam! Siz necəsiniz?";
  }
  if (lowerMessage.includes("sağ ol") || lowerMessage.includes("təşəkkür")) {
    return "Buyurun, hər zaman kömək etməyə hazıram!";
  }
  if (lowerMessage.includes("kim") && lowerMessage.includes("sən")) {
    return "Mən sizə kömək etmək üçün hazırlanmış chatbot-am.";
  }
  
  return "Bağışlayın, sualınızı tam başa düşmədim. Başqa cür soruşa bilərsiniz?";
};

// Söhbət tarixçəsini təmizləmək
const clearHistory = (req, res) => {
  const { sessionId = 'default' } = req.body;
  chatSessions.delete(sessionId);
  res.json({ message: "Söhbət tarixçəsi təmizləndi" });
};

// Söhbət tarixçəsini almaq
const getHistory = async (req, res) => {
  try {
    const { sessionId = 'default' } = req.query;
    
    const messages = await Message.find({ sessionId })
      .sort({ createdAt: -1 })
      .limit(20);
    
    res.json({ messages: messages.reverse() });
  } catch (error) {
    console.error("Tarixçə xətası:", error);
    res.status(500).json({ error: "Server xətası" });
  }
};

module.exports = { 
  sendMessage,
  clearHistory,
  getHistory
};

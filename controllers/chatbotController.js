const Registration = require("../models/Registration");
const AIService = require("../services/aiService");

// Hər sessiya üçün müvəqqəti qeydiyyat məlumatı
const registrationSessions = new Map();

// Chatbot mesaj controller
const sendMessage = async (req, res) => {
  const { userMessage, sessionId = 'default' } = req.body;

  if (!userMessage) {
    return res.status(400).json({ error: "userMessage göndərilməyib" });
  }

  if (!registrationSessions.has(sessionId)) {
    registrationSessions.set(sessionId, { step: 0, data: {} });
  }

  const session = registrationSessions.get(sessionId);
  let botReply = "";

  try {
    switch (session.step) {
      case 0:
        botReply = "Salam 👋 Kursa qeydiyyat üçün adınızı yazın:";
        session.step = 1;
        break;

      case 1:
        session.data.name = userMessage;
        botReply = "Çox gözəl 👍 İndi soyadınızı yazın:";
        session.step = 2;
        break;

      case 2:
        session.data.surname = userMessage;
        botReply = "Əlaqə nömrənizi yazın:";
        session.step = 3;
        break;

      case 3:
        session.data.phone = userMessage;
        botReply = "Hansı kursu seçirsiniz? (məs: Proqramlaşdırma, Dizayn, Dil kursu)";
        session.step = 4;
        break;

      case 4:
        session.data.course = userMessage;
        botReply = "Hansı filialda oxumaq istəyirsiniz?";
        session.step = 5;
        break;

      case 5:
        session.data.branch = userMessage;

        // DB-yə qeyd et
        const newReg = new Registration(session.data);
        await newReg.save();

        botReply = `Təşəkkürlər ✅ Qeydiyyat tamamlandı! 
Ad Soyad: ${session.data.name} ${session.data.surname}
Telefon: ${session.data.phone}
Kurs: ${session.data.course}
Filial: ${session.data.branch}`;

        registrationSessions.delete(sessionId);
        break;

      default:
        // AI servisi ilə cavab ver
        botReply = await AIService.getAIResponse(userMessage);
        break;
    }

    res.json({ userMessage, botReply, sessionId });

  } catch (error) {
    console.error("Chatbot xətası:", error);
    res.status(500).json({ error: "Chatbot cavab verə bilmir" });
  }
};

// Tarixi al
const getHistory = (req, res) => {
  // Optional: Burada DB və ya session əsaslı tarixçə saxlaya bilərsən
  res.json({ message: "Chat tarixçəsi hazırda lokal session-da yoxdur" });
};

// Tarixi sıfırla
const clearHistory = (req, res) => {
  registrationSessions.clear();
  res.json({ message: "Chat tarixçəsi sıfırlandı" });
};

module.exports = { sendMessage, getHistory, clearHistory };

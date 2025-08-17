// const Registration = require("../models/Registration");

// // hər sessiya üçün müvəqqəti qeydiyyat məlumatı saxlayırıq
// const registrationSessions = new Map();

// const sendMessage = async (req, res) => {
//   const { userMessage, sessionId = 'default' } = req.body;

//   if (!userMessage) {
//     return res.status(400).json({ error: "userMessage göndərilməyib" });
//   }

//   // Əgər qeydiyyat prosesi başlayıbsa → step-by-step yönləndir
//   if (!registrationSessions.has(sessionId)) {
//     registrationSessions.set(sessionId, { step: 0, data: {} });
//   }

//   const session = registrationSessions.get(sessionId);
//   let botReply = "";

//   switch (session.step) {
//     case 0:
//       botReply = "Salam 👋 Kursa qeydiyyat üçün adınızı yazın:";
//       session.step = 1;
//       break;

//     case 1:
//       session.data.name = userMessage;
//       botReply = "Çox gözəl 👍 İndi soyadınızı yazın:";
//       session.step = 2;
//       break;

//     case 2:
//       session.data.surname = userMessage;
//       botReply = "Əlaqə nömrənizi yazın:";
//       session.step = 3;
//       break;

//     case 3:
//       session.data.phone = userMessage;
//       botReply = "Hansı kursu seçirsiniz? (məs: Proqramlaşdırma, Dizayn, Dil kursu)";
//       session.step = 4;
//       break;

//     case 4:
//       session.data.course = userMessage;
//       botReply = "Hansı filialda oxumaq istəyirsiniz?";
//       session.step = 5;
//       break;

//     case 5:
//       session.data.branch = userMessage;

//       // DB-yə qeyd et
//       const newReg = new Registration(session.data);
//       await newReg.save();

//       botReply = `Təşəkkürlər ✅ Qeydiyyat tamamlandı! 
//       Ad Soyad: ${session.data.name} ${session.data.surname}
//       Telefon: ${session.data.phone}
//       Kurs: ${session.data.course}
//       Filial: ${session.data.branch}`;

//       // sessiyanı sıfırla
//       registrationSessions.delete(sessionId);
//       break;

//     default:
//       botReply = "Sualınızı tam başa düşmədim.";
//   }

//   res.json({ userMessage, botReply, sessionId });
// };

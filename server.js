const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ✅ CORS və JSON parser middleware-ləri ən yuxarıda
// app.use(cors({
//   origin: [
//     "http://localhost:5173",             // local frontend
//     "https://edu-project-pi.vercel.app"  // deploy frontend
//   ],
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// }));
app.use(cors());
app.use(express.json());

// ✅ MongoDB qoşulması
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch(err => console.error("❌ MongoDB connection error:", err));


// ✅ Route-lar
app.use("/api/services", require("./routes/services"));
app.use("/api/blogs", require("./routes/blogs"));
app.use("/api/countries", require("./routes/country"));
app.use("/api/exams", require("./routes/exams"));
app.use("/api/faqs", require("./routes/faqs"));
app.use("/api/videos", require("./routes/videos"));
app.use("/api/branches", require("./routes/branches"));
app.use("/api/partners", require("./routes/partners"));
app.use("/api/books", require("./routes/books"));
app.use("/api/staff", require("./routes/staff"));
app.use("/api/vacancies", require("./routes/vacancies"));
app.use("/api/vacancies-faqs", require("./routes/vacanciesFaqs"));
app.use("/api/quick-contacts", require("./routes/quickContacts"));
app.use("/api/quick-registrations", require("./routes/quickRegistrations"));
app.use("/api/exam-results", require("./routes/examResult"));
// app.use("/api/intent", require("./routes/intentRoute")); // lazım olsa aktivləşdir

// ✅ 404 fallback
app.use((req, res) => {
  res.status(404).json({ message: "Route tapılmadı" });
});

// ✅ Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server ${PORT} portunda işləyir`);
});

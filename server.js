const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
import intentRoutes from "./routes/intentRoute.js";
const app = express();

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("✅ MongoDB connected successfully"))
    .catch(err => console.error("❌ MongoDB connection error:", err));
app.use(cors());
app.use(express.json());

// Route-lar

const blogsRoutes = require("./routes/blogs");
app.use("/api/blogs", blogsRoutes);

const servicesRoutes = require("./routes/services");
app.use("/api/services", servicesRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda işləyir`);
});
const countryRoutes = require("./routes/country");
app.use("/api/countries", countryRoutes);

const examRoutes = require("./routes/exams");
app.use("/api/exams", examRoutes);

const faqRoutes = require("./routes/faqs");
app.use("/api/faqs", faqRoutes);

const videosRoutes = require("./routes/videos");
app.use("/api/videos", videosRoutes);

const branchRoutes = require("./routes/branches");
app.use("/api/branches", branchRoutes);

const partnersRoutes = require("./routes/partners");
app.use("/api/partners", partnersRoutes);

const booksRoutes = require("./routes/books");
app.use("/api/books", booksRoutes);

const staffRoutes = require("./routes/staff");
app.use("/api/staff", staffRoutes);

const vacancyRoutes = require("./routes/vacancies");
app.use("/api/vacancies", vacancyRoutes);

const vacancyFaqRoutes = require("./routes/vacanciesFaqs");
app.use("/api/vacancies-faqs", vacancyFaqRoutes);

const quickContactRoutes = require("./routes/quickContacts");
app.use("/api/quick-contacts", quickContactRoutes);

const quickRegistrationRoutes = require("./routes/quickRegistrations");
app.use("/api/quick-registrations", quickRegistrationRoutes);

const examResultsRoutes = require("./routes/examResult");
app.use("/api/exam-results", examResultsRoutes);

// const chatbotRoutes = require("./routes/chatbotRoutes");
// app.use("/api/chatbot", chatbotRoutes);
mongoose.connect("mongodb://localhost:27017/chatbotDB");
app.use("/api/intents", intentRoutes);

// Serverə fallback (404 üçün)
app.use( (req, res) => {
  res.status(404).json({ message: "Route tapılmadı" });
});




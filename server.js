const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB-yə uğurla qoşuldu"))
.catch((err) => console.error("MongoDB-yə qoşularkən xəta baş verdi:", err));

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
const countryRoutes = require("./routes/countries");
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

const blogsRoutes = require("./routes/blogs");
app.use("/api/blogs", blogsRoutes);

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

const chatbotRoutes = require("./routes/chatbotRoutes");
app.use("/api/chatbot", chatbotRoutes);

// Serverə fallback (404 üçün)
app.use( (req, res) => {
  res.status(404).json({ message: "Route tapılmadı" });
});




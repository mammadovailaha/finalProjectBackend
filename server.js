require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Routers
const quickContactRoutes = require("./routes/quickContactRoutes");
const quickRegistrationRoutes = require("./routes/quickRegistrationRoutes");
const staffRoutes = require("./routes/staffRoutes");
const vacancyRoutes = require("./routes/vacancyRoutes");
const vacancyFaqRoutes = require("./routes/vacancyFaqRoutes");
const videoRoutes = require("./routes/videoRoutes");
const faqRoutes = require("./routes/faqRoutes"); // yeni FAQ router
const chatbotRoutes = require("./routes/chatbotRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers
app.use("/api/quick-contacts", quickContactRoutes);
app.use("/api/quick-registrations", quickRegistrationRoutes);
app.use("/api/staff", staffRoutes);
app.use("/api/vacancies", vacancyRoutes);
app.use("/api/vacancy-faqs", vacancyFaqRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/faqs", faqRoutes); // FAQ
app.use("/api/chatbot", chatbotRoutes);

// MongoDB Connect
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB bağlantısı uğurla yaradıldı ✅");
})
.catch((err) => {
  console.error("MongoDB xətası ❌", err);
});

// Health check
app.get("/", (req, res) => {
  res.send("Server işləyir 🚀");
});

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server ${PORT}-portda işləyir 🚀`);
});

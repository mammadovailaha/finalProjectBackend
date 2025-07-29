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


// Serverə fallback (404 üçün)
app.use( (req, res) => {
  res.status(404).json({ message: "Route tapılmadı" });
});




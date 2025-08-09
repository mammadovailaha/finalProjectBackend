// require("dotenv").config();
// const mongoose = require("mongoose");
// const Video = require("./models/Video");
// const Faq = require("./models/faqModel");

// async function migrate() {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI);
//     console.log("✅ MongoDB connected");

//     const allVideos = await Video.find();

//     if (!allVideos.length) {
//       console.log("⚠ Köçürüləcək məlumat yoxdur");
//       return;
//     }

//     // eyni schema olduğuna görə birbaşa kopyalaya bilərik
//     const faqs = allVideos.map(v => ({
//       question: v.question,
//       answer: v.answer
//     }));

//     await Faq.insertMany(faqs);

//     // istəsən köhnəni silə bilərsən:
//     // await Video.collection.drop();

//     console.log("🎉 Məlumatlar uğurla köçürüldü");
//   } catch (err) {
//     console.error("❌ Error:", err);
//   } finally {
//     await mongoose.disconnect();
//     console.log("🔌 MongoDB connection closed");
//   }
// }

// migrate();

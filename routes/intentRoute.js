import express from "express";
import Intent from "../models/intent.js";

const router = express.Router();

// Yeni intent əlavə etmək
router.post("/", async (req, res) => {
  try {
    const { intent, response, link } = req.body;
    const newIntent = new Intent({ intent, response, link });
    await newIntent.save();
    res.status(201).json(newIntent);
  } catch (error) {
    res.status(500).json({ error: "Intent əlavə edilə bilmədi" });
  }
});

// Bütün intentləri götürmək
router.get("/", async (req, res) => {
  try {
    const intents = await Intent.find();
    res.json(intents);
  } catch (error) {
    res.status(500).json({ error: "Intents yüklənə bilmədi" });
  }
});

// İdentifikatorla intent götürmək
router.get("/:id", async (req, res) => {
  try {
    const intent = await Intent.findById(req.params.id);
    if (!intent) {
      return res.status(404).json({ error: "Intent tapılmadı" });
    }
    res.json(intent);
  } catch (error) {
    res.status(500).json({ error: "Intent yüklənə bilmədi" });
  }
});

export default router;

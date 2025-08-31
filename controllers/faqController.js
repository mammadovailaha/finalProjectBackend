const Faq = require("../models/Faq");

// Bütün FAQ-ları gətir
const getAllFaqs = async (req, res) => {
  try {
    const faqs = await Faq.find();
    res.status(200).json(faqs);
  } catch (error) {
    res.status(500).json({ message: "FAQ-lar gətirilə bilmədi", error });
  }
};

// Yeni FAQ yarat
const createFaq = async (req, res) => {
  try {
    const { question, answer } = req.body;

    if (!question || !answer) {
      return res.status(400).json({ message: "Sual və cavab mütləqdir" });
    }

    const newFaq = new Faq({ question, answer });
    await newFaq.save();
    res.status(201).json(newFaq);
  } catch (error) {
    res.status(500).json({ message: "FAQ yaradılmadı", error });
  }
};

// ID ilə FAQ gətir
const getFaqById = async (req, res) => {
  try {
    const faq = await Faq.findById(req.params.id);
    if (!faq) return res.status(404).json({ message: "FAQ tapılmadı" });
    res.status(200).json(faq);
  } catch (error) {
    res.status(500).json({ message: "FAQ gətirilə bilmədi", error });
  }
};

// FAQ yenilə
const updateFaq = async (req, res) => {
  try {
    const updatedFaq = await Faq.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updatedFaq) return res.status(404).json({ message: "FAQ tapılmadı" });
    res.status(200).json(updatedFaq);
  } catch (error) {
    res.status(500).json({ message: "FAQ yenilənmədi", error });
  }
};

// FAQ sil
const deleteFaq = async (req, res) => {
  try {
    const deletedFaq = await Faq.findByIdAndDelete(req.params.id);
    if (!deletedFaq) return res.status(404).json({ message: "FAQ tapılmadı" });
    res.status(200).json({ message: "FAQ silindi" });
  } catch (error) {
    res.status(500).json({ message: "FAQ silinmədi", error });
  }
};

module.exports = {
  getAllFaqs,
  createFaq,
  getFaqById,
  updateFaq,
  deleteFaq,
};

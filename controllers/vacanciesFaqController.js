const VacancyFaq = require("../models/VacancyFaq");

// ✅ Bütün sualları gətir
const getAllVacancyFaqs = async (req, res) => {
    try {
        const faqs = await VacancyFaq.find();
        res.json(faqs);
    } catch (error) {
        res.status(500).json({ message: "Xəta baş verdi", error });
    }
};

const createVacancyFaq = async (req, res) => {
    const { question, answer } = req.body;

    if (!question || !answer) {
        return res.status(400).json({ message: "Sual və cavab boş ola bilməz" });
    }

    try {
        const newFaq = new VacancyFaq({ question, answer });
        await newFaq.save();
        res.status(201).json(newFaq);
    } catch (error) {
        res.status(500).json({ message: "Xəta baş verdi", error });
    }
}
const updateVacancyFaq = async (req, res) => {
    const { id } = req.params;
    const { question, answer } = req.body;

    try {
        const updatedFaq = await VacancyFaq.findByIdAndUpdate(
            id,
            { question, answer },
            { new: true }
        );
        if (!updatedFaq) {
            return res.status(404).json({ message: "Sual tapılmadı" });
        }
        res.json(updatedFaq);
    } catch (error) {
        res.status(500).json({ message: "Xəta baş verdi", error });
    }
};
const deleteVacancyFaq = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedFaq = await VacancyFaq.findByIdAndDelete(id);
        if (!deletedFaq) {
            return res.status(404).json({ message: "Sual tapılmadı" });
        }
        res.json({ message: "Sual silindi" });
    } catch (error) {
        res.status(500).json({ message: "Xəta baş verdi", error });
    }
}
const getVacancyFaqById = async (req, res) => {
    const { id } = req.params;

    try {
        const faq = await VacancyFaq.findById(id);
        if (!faq) {
            return res.status(404).json({ message: "Sual tapılmadı" });
        }
        res.json(faq);
    } catch (error) {
        res.status(500).json({ message: "Xəta baş verdi", error });
    }
}
module.exports = {
    getAllVacancyFaqs,
    createVacancyFaq,
    updateVacancyFaq,
    deleteVacancyFaq,
    getVacancyFaqById
};
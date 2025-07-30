const Vacancy = require("../models/Vacancy");

// Yeni vakansiya yarat
exports.createVacancy = async (req, res) => {
  try {
    const vacancy = new Vacancy(req.body);
    await vacancy.save();
    res.status(201).json(vacancy);
  } catch (error) {
    res.status(500).json({ error: "Vakansiya yaradılmadı" });
  }
};

// Bütün vakansiyaları getir
exports.getVacancies = async (req, res) => {
  try {
    const vacancies = await Vacancy.find();
    res.status(200).json(vacancies);
  } catch (error) {
    res.status(500).json({ error: "Vakansiyalar gətirilə bilmədi" });
  }
};

// ID ilə vakansiya getir
exports.getVacancyById = async (req, res) => {
  try {
    const vacancy = await Vacancy.findById(req.params.id);
    if (!vacancy) return res.status(404).json({ error: "Vakansiya tapılmadı" });
    res.status(200).json(vacancy);
  } catch (error) {
    res.status(500).json({ error: "Vakansiya gətirilə bilmədi" });
  }
};

// Vakansiya yenilə
exports.updateVacancy = async (req, res) => {
  try {
    const updated = await Vacancy.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: "Vakansiya yenilənmədi" });
  }
};

// Vakansiyanı sil
exports.deleteVacancy = async (req, res) => {
  try {
    await Vacancy.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Vakansiya silindi" });
  } catch (error) {
    res.status(500).json({ error: "Vakansiya silinmədi" });
  }
};

const Country = require("../models/Country");

// Create new country
exports.createCountry = async (req, res) => {
  try {
    const { title, image, universityLogos } = req.body;

    const newCountry = new Country({
      title,
      image,
      universityLogos,
    });

    await newCountry.save();
    res.status(201).json(newCountry);
  } catch (error) {
    res.status(500).json({ error: "Country creation failed" });
  }
};

// Get all countries
exports.getCountries = async (req, res) => {
  try {
    const countries = await Country.find();
    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json({ error: "Error getting countries" });
  }
};

// Get single country by ID
exports.getCountryById = async (req, res) => {
  try {
    const country = await Country.findById(req.params.id);
    if (!country) return res.status(404).json({ error: "Country not found" });
    res.status(200).json(country);
  } catch (error) {
    res.status(500).json({ error: "Error getting country" });
  }
};

// Update country
exports.updateCountry = async (req, res) => {
  try {
    const { title, image, universityLogos } = req.body;
    const updatedCountry = await Country.findByIdAndUpdate(
      req.params.id,
      { title, image, universityLogos },
      { new: true }
    );
    res.status(200).json(updatedCountry);
  } catch (error) {
    res.status(500).json({ error: "Country update failed" });
  }
};

// Delete country
exports.deleteCountry = async (req, res) => {
  try {
    await Country.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Country deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Country deletion failed" });
  }
};

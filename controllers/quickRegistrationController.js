const QuickRegistration = require("../models/QuickRegistration");

// Yeni qeydiyyat yaradın
exports.createRegistration = async (req, res) => {
  try {
    const { fullname, phone, note } = req.body;

    const newRegistration = new QuickRegistration({
      fullname,
      phone,
      note,
    });

    await newRegistration.save();
    res.status(201).json(newRegistration);
  } catch (error) {
    res.status(500).json({ error: "Qeydiyyat uğursuz oldu" });
  }
};

// (istəyə bağlı) Bütün qeydiyyatları gətir
exports.getAllRegistrations = async (req, res) => {
  try {
    const registrations = await QuickRegistration.find();
    res.status(200).json(registrations);
  } catch (error) {
    res.status(500).json({ error: "Qeydiyyatları gətirmək mümkün olmadı" });
  }
};

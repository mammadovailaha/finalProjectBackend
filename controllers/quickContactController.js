const QuickContact = require("../models/QuickContact");

// Create new contact
exports.createQuickContact = async (req, res) => {
  try {
    const { fullname, phone, branch, hasWhatsapp } = req.body;

    const newContact = new QuickContact({
      fullname,
      phone,
      branch,
      hasWhatsapp,
    });

    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ error: "Sorğu göndərilə bilmədi" });
  }
};

// (Optional) Get all quick contacts
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await QuickContact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Sorğular alınmadı" });
  }
};

const Partner = require("../models/Partner");
// ✅ Bütün partnyorları gətir
const getAllPartners = async (req, res) => {
    try {
        const partners = await Partner.find();
        res.json(partners);
    } catch (error) {
        res.status(500).json({ message: "Xəta baş verdi", error });
    }
    }
// ✅ Yeni partnyor yarat
const createPartner = async (req, res) => {
    const { img, alt } = req.body;

    if (!img || !alt) {
        return res.status(400).json({ message: "Image və alt boş ola bilməz" });
    }

    try {
        const newPartner = new Partner({ img, alt });
        await newPartner.save();
        res.status(201).json(newPartner);
    } catch (error) {
        res.status(500).json({ message: "Xəta baş verdi", error });
    }
}
// ✅ Mövcud partnyoru yenilə
const updatePartner = async (req, res) => {
    const { id } = req.params;
    const { img, alt } = req.body;

    try {
        const updatedPartner = await Partner.findByIdAndUpdate(
            id,
            { img, alt },
            { new: true }
        );

        if (!updatedPartner) {
            return res.status(404).json({ message: "Partnyor tapılmadı" });
        }

        res.json(updatedPartner);
    } catch (error) {
        res.status(500).json({ message: "Xəta baş verdi", error });
    }
}
// ✅ Mövcud partnyoru sil
const deletePartner = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedPartner = await Partner.findByIdAndDelete(id);

        if (!deletedPartner) {
            return res.status(404).json({ message: "Partnyor tapılmadı" });
        }

        res.json({ message: "Partnyor silindi" });
    } catch (error) {
        res.status(500).json({ message: "Xəta baş verdi", error });
    }
}
const getPartnerById = async (req, res) => {
    const { id } = req.params;

    try {
        const partner = await Partner.findById(id);

        if (!partner) {
            return res.status(404).json({ message: "Partnyor tapılmadı" });
        }

        res.json(partner);
    } catch (error) {
        res.status(500).json({ message: "Xəta baş verdi", error });
    }
}

module.exports = {
    getAllPartners,
    createPartner,
    updatePartner,
    deletePartner,
    getPartnerById
};
const Brand = require("../models/Brand");
// ✅ Bütün markaları gətir
const getAllBrands = async (req, res) => {
    try {
        const brands = await Brand.find();
        res.json(brands);
    } catch (error) {
        res.status(500).json({ message: "Xəta baş verdi", error });
    }
};
// ✅ Yeni marka yarat
const createBrand = async (req, res) => {
    const { title, url, test } = req.body;

    if (!title || !url || !test) {
        return res.status(400).json({ message: "Bütün sahələr doldurulmalıdır" });
    }

    try {
        const newBrand = new Brand({ title, url, test });
        await newBrand.save();
        res.status(201).json(newBrand);
    } catch (error) {
        res.status(500).json({ message: "Xəta baş verdi", error });
    }
};
// ✅ Mövcud markanı yenilə
const updateBrand = async (req, res) => {
    const { id } = req.params;
    const { title, url, test } = req.body;

    try {
        const updatedBrand = await
        Brand.findByIdAndUpdate(
            id,
            { title, url, test },
            { new: true }
        );
        res.json(updatedBrand);
    }
    catch (error) {
        res.status(500).json({ message: "Xəta baş verdi", error });
    }
}
// ✅ Mövcud markanı sil
const deleteBrand = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedBrand = await Brand.findByIdAndDelete(id);

        if (!deletedBrand) {
            return res.status(404).json({ message: "Marka tapılmadı" });
        }

        res.json({ message: "Marka silindi" });
    } catch (error) {
        res.status(500).json({ message: "Xəta baş verdi", error });
    }
};
// ✅ ID-ə görə marka gətir
const getBrandById = async (req, res) => {
    const { id } = req.params;

    try {
        const brand = await Brand.findById(id);

        if (!brand) {
            return res.status(404).json({ message: "Marka tapılmadı" });
        }

        res.json(brand);
    } catch (error) {
        res.status(500).json({ message: "Xəta baş verdi", error });
    }
};
module.exports = {
    getAllBrands,
    createBrand,
    updateBrand,
    deleteBrand,
    getBrandById
};
// controllers/servicesController.js
const Service = require("../models/Service");

// ✅ Bütün servisləri gətir
const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: "Xəta baş verdi", error });
  }
};

// ✅ Yeni service yarat
const createService = async (req, res) => {
  const { title, description, url } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title boş ola bilməz" });
  }

  try {
    const newService = new Service({ title, description, url });
    await newService.save();
    res.status(201).json(newService);
  } catch (error) {
    res.status(500).json({ message: "Xəta baş verdi", error });
  }
};

// ✅ Mövcud service-i yenilə
const updateService = async (req, res) => {
  const { id } = req.params;
  const { title, description, url } = req.body;

  try {
    const updatedService = await Service.findByIdAndUpdate(
      id,
      { title, description, url },
      { new: true }
    );

    if (!updatedService) {
      return res.status(404).json({ message: "Service tapılmadı" });
    }

    res.json(updatedService);
  } catch (error) {
    res.status(500).json({ message: "Xəta baş verdi", error });
  }
};

// ✅ Mövcud service-i sil
const deleteService = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedService = await Service.findByIdAndDelete(id);

    if (!deletedService) {
      return res.status(404).json({ message: "Service tapılmadı" });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Xəta baş verdi", error });
  }
};


// ✅ ID ilə service-i gətir
const getServiceById = async (req, res) => {    
  const { id } = req.params;

  try {
    const service = await Service.findById(id);

    if (!service) {
      return res.status(404).json({ message: "Service tapılmadı" });
    }

    res.json(service);
  } catch (error) {
    console.log("Service fetch error:", error); // <-- bunu əlavə edin
    res.status(500).json({ message: "Xəta baş verdi", error });
  }
};
module.exports = {
  getAllServices,
  createService,
  getServiceById,
  updateService,
  deleteService
};
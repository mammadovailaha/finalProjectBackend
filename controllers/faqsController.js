// const Faq=require("../models/faqModel");
// // ✅ Bütün FAQ-ları gətir
// const getAllFaqs = async (req, res) => {
//     try {
//         const faqs = await Faq.find();
//         res.json(faqs);
//     } catch (error) {
//         res.status(500).json({ message: "Xəta baş verdi", error });
//     }
// };
// const createFaq = async (req, res) => {
//     const { question, answer } = req.body;

//     if (!question || !answer) {
//         return res.status(400).json({ message: "Question və answer boş ola bilməz" });
//     }

//     try {
//         const newFaq = new Faq({ question, answer });
//         await newFaq.save();
//         res.status(201).json(newFaq);
//     } catch (error) {
//         res.status(500).json({ message: "Xəta baş verdi", error });
//     }
// }
// // ✅ Mövcud FAQ-u yenilə
// const updateFaq = async (req, res) => {
//     const { id } = req.params;
//     const { question, answer } = req.body;

//     try {
//         const updatedFaq = await Faq.findByIdAndUpdate(
//             id,
//             { question, answer },
//             { new: true }
//         );

//         if (!updatedFaq) {
//             return res.status(404).json({ message: "FAQ tapılmadı" });
//         }

//         res.json(updatedFaq);
//     } catch (error) {
//         res.status(500).json({ message: "Xəta baş verdi", error });
//     }
// };
// // ✅ Mövcud FAQ-u sil
// const deleteFaq = async (req, res) => {
//     const { id } = req.params;

//     try {
//         const deletedFaq = await Faq.findByIdAndDelete(id);

//         if (!deletedFaq) {
//             return res.status(404).json({ message: "FAQ tapılmadı" });
//         }

//         res.json({ message: "FAQ uğurla silindi" });
//     } catch (error) {
//         res.status(500).json({ message: "Xəta baş verdi", error });
//     }
// };
// const getFaqById = async (req, res) => {
//     const { id } = req.params;

//     try {
//         const faq = await Faq.findById(id);

//         if (!faq) {
//             return res.status(404).json({ message: "FAQ tapılmadı" });
//         }

//         res.json(faq);
//     } catch (error) {
//         res.status(500).json({ message: "Xəta baş verdi", error });
//     }
// };
// module.exports = {
//     getAllFaqs,
//     createFaq,
//     updateFaq,
//     deleteFaq,
//     getFaqById
// };
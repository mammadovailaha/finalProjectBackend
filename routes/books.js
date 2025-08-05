const express = require("express");
const router = express.Router();


const{
    getAllBooks,
    createBook,
    getBookById,
    updateBookById,
    deleteBookById
}=require("../controllers/booksController");

router.get("/", getAllBooks);
router.post("/", createBook);
router.get("/:id", getBookById);
router.put("/:id", updateBookById);
router.delete("/:id", deleteBookById);

module.exports = router;    
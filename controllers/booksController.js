const Book = require("../models/Book");

const getAllBooks = (req, res) => {
  Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(500).json({ message: "Server error" }));
}

const createBook = (req, res) => {
  const newBook = new Book({
    ...req.body,
  });

  newBook.save()
    .then(book => res.status(201).json(book))
    .catch(err => res.status(500).json({ message: "Server error" }));
};


const getBookById = (req, res) => {
  const bookId = req.params.id;
  Book.findById(bookId)
    .then(book => {
      if (!book) {
        return res.status(404).json({ message: "Book not found" });
      }
      res.json(book);
    })
    .catch(err => res.status(500).json({ message: "Server error" }));
};



const updateBookById = (req, res) => {
  const bookId = req.params.id;
  Book.findByIdAndUpdate(bookId, req.body, { new: true })
    .then(book => {
      if (!book) {
        return res.status(404).json({ message: "Book not found" });
      }
      res.json(book);
    })
    .catch(err => res.status(500).json({ message: "Server error" }));
};


const deleteBookById = (req, res) => {
  const bookId = req.params.id;
  Book.findByIdAndDelete(bookId)
    .then(book => {
      if (!book) {
        return res.status(404).json({ message: "Book not found" });
      }
      res.status(204).send();
    })
    .catch(err => res.status(500).json({ message: "Server error" }));
};

module.exports = {
  getAllBooks,      
    createBook,
    getBookById,
    updateBookById,
    deleteBookById
};
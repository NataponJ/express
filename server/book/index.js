const express = require("express");
const router = express.Router({ mergeParams: true });

const books = [
  { id: 1, title: "Book 1", author: "Author 1" },
  { id: 2, title: "Book 2", author: "Author 2" },
  { id: 3, title: "Book 3", author: "Author 3" },
];

router.get("/", (req, res) => {
  res.json(books);
});

router.get("/q/:id", (req, res) => {
  const param = req.params;
  const findedBook = books.find((book) => book.id === parseInt(param.id));
  res.json(findedBook);
});

router.get("/q/", (req, res) => {
  const param = req.query;
  res.json(param);
});

router.post("/create", (req, res) => {
  const param = req.body;
  res.send(param);
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const bookToUpdate = books.find((book) => book.id === parseInt(id));
  if (!bookToUpdate) {
    return res.status(404).json({ message: "User not found" });
  }

  bookToUpdate.id = data.id || bookToUpdate.id;
  bookToUpdate.title = data.title || bookToUpdate.title;
  bookToUpdate.author = data.author || bookToUpdate.author;

  res.json({ message: "Book updated successfully", book: bookToUpdate });
});

router.patch("/:id", (req, res) => {
  const id = req.params.id;
  const data = req.body;

  const bookToUpdate = books.find((book) => book.id === parseInt(id));
  if (!bookToUpdate) {
    return res.status(404).json({ message: "Book not found" });
  }

  if (data.id) {
    bookToUpdate.id = data.id;
  }
  if (data.title) {
    bookToUpdate.title = data.title;
  }
  if (data.author) {
    bookToUpdate.author = data.author;
  }

  res.json({ message: "Book updated successfully", book: bookToUpdate });
});

router.delete("/:index", (req, res) => {
  const index = req.params.index;

  if (index >= 0 && index < books.length) {
    const deletedBook = books.splice(index, 1)[0];
    res.json({ message: "Book deleted successfully", book: deletedBook });
  } else {
    res.status(404).json({ error: "Book not found" });
  }
});

module.exports = router;

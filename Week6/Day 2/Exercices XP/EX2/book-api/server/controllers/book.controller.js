let books = require('../models/book.model');

// Récupérer tous les livres
exports.getAllBooks = (req, res) => {
  res.status(200).json(books);
};

// Récupérer un livre par ID
exports.getBookById = (req, res) => {
  const id = parseInt(req.params.bookId);
  const book = books.find(b => b.id === id);
  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({ message: 'Livre introuvable' });
  }
};

// Créer un nouveau livre
exports.createBook = (req, res) => {
  const { title, author, publishedYear } = req.body;
  const newBook = {
    id: books.length + 1,
    title,
    author,
    publishedYear
  };
  books.push(newBook);
  res.status(201).json(newBook);
};

// Mettre à jour un livre
exports.updateBook = (req, res) => {
  const id = parseInt(req.params.bookId);
  const { title, author, publishedYear } = req.body;
  const book = books.find(b => b.id === id);
  if (book) {
    book.title = title || book.title;
    book.author = author || book.author;
    book.publishedYear = publishedYear || book.publishedYear;
    res.status(200).json(book);
  } else {
    res.status(404).json({ message: 'Livre introuvable' });
  }
};

// Supprimer un livre
exports.deleteBook = (req, res) => {
  const id = parseInt(req.params.bookId);
  const index = books.findIndex(b => b.id === id);
  if (index !== -1) {
    books.splice(index, 1);
    res.status(200).json({ message: 'Livre supprimé avec succès' });
  } else {
    res.status(404).json({ message: 'Livre introuvable' });
  }
};

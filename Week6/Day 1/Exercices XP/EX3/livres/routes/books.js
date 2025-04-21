const express = require('express');
const router = express.Router();

let books = [];
let currentId = 1;

// GET - Tous les livres
router.get('/', (req, res) => {
  res.json(books);
});

// POST - Ajouter un livre
router.post('/', (req, res) => {
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({ error: 'Title et author requis' });
  }

  const newBook = {
    id: currentId++,
    title,
    author
  };

  books.push(newBook);
  res.status(201).json(newBook);
  
});

// PUT - Modifier un livre par ID
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author } = req.body;
  const book = books.find(b => b.id === id);

  if (!book) {
    return res.status(404).json({ error: 'Livre non trouvé' });
  }

  if (title !== undefined) book.title = title;
  if (author !== undefined) book.author = author;

  res.json(book);
});

// DELETE - Supprimer un livre par ID
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Livre non trouvé' });
  }

  books.splice(index, 1);
  res.status(204).send(); 
});

module.exports = router;

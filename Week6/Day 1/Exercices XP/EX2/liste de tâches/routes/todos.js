const express = require('express');
const router = express.Router();

let todos = [];
let currentId = 1;

// GET - Récupérer toutes les tâches
router.get('/', (req, res) => {
  res.json(todos);
});

// POST - Ajouter une nouvelle tâche
router.post('/', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Le titre est requis' });
  }

  const newTodo = {
    id: currentId++,
    title,
    completed: false
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// PUT - Mettre à jour une tâche par ID
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, completed } = req.body;

  const todo = todos.find(t => t.id === id);
  if (!todo) {
    return res.status(404).json({ error: 'Tâche non trouvée' });
  }

  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;

  res.json(todo);
});

// DELETE - Supprimer une tâche par ID
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Tâche non trouvée' });
  }

  todos.splice(index, 1);
  res.status(204).send(); 
});

module.exports = router;

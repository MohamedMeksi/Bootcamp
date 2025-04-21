const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const todosRouter = require('./routes/todos');

app.use(express.static('public'));

app.use('/todos', todosRouter);

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});

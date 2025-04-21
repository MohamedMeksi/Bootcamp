const express = require('express');
const dotenv = require('dotenv');
const postRoutes = require('./server/routes/post.routes');

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use('/posts', postRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Gestion des erreurs serveur
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

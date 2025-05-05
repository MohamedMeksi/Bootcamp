const express = require('express');
const path = require('path');
const usersRoutes = require('./routes/usersRoute');
const app = express();
const PORT = 3000;
app.use(express.static(__dirname))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', usersRoutes);
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
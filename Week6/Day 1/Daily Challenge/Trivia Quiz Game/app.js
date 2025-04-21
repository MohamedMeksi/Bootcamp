const express = require('express');
const app = express();
const quizRouter = require('./routes/quizRouter');

app.use(express.json());
app.use('/quiz', quizRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Trivia quiz game running at http://localhost:${PORT}/quiz`);
});

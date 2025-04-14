const express = require('express');
const path = require('path');
const emojis = require('./data/emojis');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let score = 0;

function getRandomEmoji() {
  const correct = emojis[Math.floor(Math.random() * emojis.length)];
  const options = new Set([correct.name]);
  while (options.size < 4) {
    options.add(emojis[Math.floor(Math.random() * emojis.length)].name);
  }
  return { emoji: correct.emoji, answer: correct.name, options: Array.from(options).sort() };
}

let currentQuestion = getRandomEmoji();

app.get('/api/question', (req, res) => {
  currentQuestion = getRandomEmoji();
  res.json({ emoji: currentQuestion.emoji, options: currentQuestion.options });
});

app.post('/api/answer', (req, res) => {
  const { guess } = req.body;
  const correct = guess === currentQuestion.answer;
  if (correct) score++;
  res.json({ correct, score });
});

app.get('/api/score', (req, res) => {
  res.json({ score });
});

app.listen(5000, () => {
  console.log('🚀 Serveur démarré sur http://localhost:5000');
});

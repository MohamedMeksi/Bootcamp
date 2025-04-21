const express = require('express');
const router = express.Router();
const triviaQuestions = require('../data/triviaData');

let userProgress = {
  currentQuestionIndex: 0,
  score: 0
};

router.get('/', (req, res) => {
  const index = userProgress.currentQuestionIndex;
  if (index >= triviaQuestions.length) {
    return res.redirect('/quiz/score');
  }
  res.json({
    question: triviaQuestions[index].question,
    questionNumber: index + 1,
    totalQuestions: triviaQuestions.length
  });
});

router.post('/', (req, res) => {
  const userAnswer = req.body.answer;
  const currentQuestion = triviaQuestions[userProgress.currentQuestionIndex];

  if (!userAnswer) {
    return res.status(400).json({ message: "Answer is required." });
  }

  let isCorrect = userAnswer.trim().toLowerCase() === currentQuestion.answer.toLowerCase();

  if (isCorrect) {
    userProgress.score++;
  }

  userProgress.currentQuestionIndex++;

  if (userProgress.currentQuestionIndex >= triviaQuestions.length) {
    return res.json({
      message: isCorrect ? "Correct!" : `Wrong! The correct answer was: ${currentQuestion.answer}`,
      next: "/quiz/score"
    });
  } else {
    return res.json({
      message: isCorrect ? "Correct!" : `Wrong! The correct answer was: ${currentQuestion.answer}`,
      next: "/quiz"
    });
  }
});

router.get('/score', (req, res) => {
  const finalScore = userProgress.score;
  const total = triviaQuestions.length;

  // reset for new game
  userProgress = { currentQuestionIndex: 0, score: 0 };

  res.json({
    message: "Quiz Finished!",
    score: `${finalScore}/${total}`
  });
});

module.exports = router;

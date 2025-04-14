async function loadQuestion() {
    const res = await fetch('/api/question');
    const data = await res.json();
  
    const game = document.getElementById('game');
    game.innerHTML = `
      <h2 style="font-size: 48px;">${data.emoji}</h2>
      ${data.options.map(opt => `<button onclick="submitGuess('${opt}')">${opt}</button>`).join('<br>')}
    `;
  }
  
  async function submitGuess(guess) {
    const res = await fetch('/api/answer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ guess }),
    });
    const data = await res.json();
  
    document.getElementById('feedback').textContent = data.correct ? "✅ Bravo !" : "❌ Raté...";
    document.getElementById('score').textContent = `Score : ${data.score}`;
  
    setTimeout(loadQuestion, 1000);
  }
  
  loadQuestion();
  
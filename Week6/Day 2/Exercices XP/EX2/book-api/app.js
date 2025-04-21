const express = require('express');
const app = express();


app.use((req, res, next) => {
    res.setHeader(
      'Content-Security-Policy',
      "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';"
    );
    next();
  });
  
// Exemple route
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Test CSP</title>
      </head>
      <body>
        <h1>Hello 👋</h1>
        <button onclick="alert('OK')">Test Inline JS</button>
        <style>
          body { background-color: #f0f0f0; }
        </style>
      </body>
    </html>
  `);
});

// Démarrer serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur http://localhost:${PORT}`);
});

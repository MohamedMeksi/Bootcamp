const express = require("express");
const app = express();
const { fetchPosts } = require("./data/dataService");

app.use(express.json());


app.get("/api/posts", async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log("✅ Données récupérées avec succès depuis JSONPlaceholder");
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des posts" });
  }
});

app.listen(5000, () => {
  console.log("http://localhost:5000");
  console.log("✅ Serveur démarré sur le port 5000");
});

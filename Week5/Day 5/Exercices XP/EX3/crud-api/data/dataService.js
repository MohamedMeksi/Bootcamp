const axios = require("axios");


async function fetchPosts() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data;
  } catch (error) {
    console.error("❌ Erreur lors de la récupération des posts :", error.message);
    throw error;
  }
}

module.exports = { fetchPosts };

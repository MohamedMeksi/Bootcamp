
const form = document.getElementById("gifForm");
const searchInput = document.getElementById("searchInput");
const gifContainer = document.getElementById("gifContainer");
const deleteAllBtn = document.getElementById("deleteAll");


form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const query = searchInput.value.trim();
  if (!query) return; 

  try {

    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?tag=${query}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
    );

    if (!response.ok) {
      throw new Error("Erreur lors de la récupération du GIF.");
    }

    const data = await response.json();


    if (!data.data || !data.data.images) {
      alert("Aucun GIF trouvé pour cette recherche !");
      return;
    }

    const gifUrl = data.data.images.fixed_height.url;
    addGifToContainer(gifUrl);
    searchInput.value = ""; 
  } catch (error) {
    console.error("Erreur lors de la récupération du GIF :", error);
    alert("Échec de la récupération du GIF. Essayez à nouveau.");
  }
});


function addGifToContainer(gifUrl) {
  const gifItem = document.createElement("div");
  gifItem.classList.add("gif-item");

  const img = document.createElement("img");
  img.src = gifUrl;
  img.alt = "GIF animé";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "DELETE";
  deleteBtn.addEventListener("click", () => gifItem.remove()); 

  gifItem.appendChild(img);
  gifItem.appendChild(deleteBtn);
  gifContainer.appendChild(gifItem);
}


deleteAllBtn.addEventListener("click", () => {
  gifContainer.innerHTML = ""; 
});

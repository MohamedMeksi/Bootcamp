// Créez une asyncfonction qui exécutera awaitla requête GET ci-dessus.
// Le programme ne doit contenir aucune then()méthode.

const fetchStarship = async () => {
    try {
        const response = await fetch("https://www.swapi.tech/api/starships/9/");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data.result);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
fetchStarship();
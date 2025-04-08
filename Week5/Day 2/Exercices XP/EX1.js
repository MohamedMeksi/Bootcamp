// !Créez un programme pour récupérer les données depuis l'URL d'API fournie ci-dessus.
// !Utilisez la fetch()méthode pour envoyer une requête GET à l'API Giphy et enregistrez l'objet JavaScript reçu dans Console.log.
// !Vérifiez l'état de la réponse et identifiez les erreurs éventuelles.

const fetchGif = async () => {
    try {
        const response = await fetch('https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
fetchGif();
// !Utilisez l'API Fetch pour récupérer 10 GIF sur le thème du « soleil ». La position de départ des résultats doit être 2.
// !Vérifiez l'état de la réponse et détectez les erreurs éventuelles.


const fetchSunGifs = async () => {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
        if (!response.ok) {
            throw new Error('Une erreur :' + response.status);
        }
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.error('Erreur:', error);
    }
}

fetchSunGifs();
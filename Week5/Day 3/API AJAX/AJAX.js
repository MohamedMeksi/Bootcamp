
const findButton = document.getElementById('find-button');
const characterName = document.getElementById('character-name');
const characterInfo = document.getElementById('character-info');

async function getRandomCharacter() {
    try {
        const randomId = Math.floor(Math.random() * 83) + 1;
        const response = await fetch(`https://www.swapi.tech/api/people/${randomId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch character data');
        }

        const data = await response.json();
        const character = data.result.properties;

        characterName.textContent = character.name;
        characterInfo.innerHTML = `
            <li><strong>Height:</strong> ${character.height}</li>
            <li><strong>Gender:</strong> ${character.gender}</li>
            <li><strong>Birth Year:</strong> ${character.birth_year}</li>
            <li><strong>Home World:</strong> ${character.homeworld}</li>
        `;
    } catch (error) {
        characterName.textContent = 'Error';
        characterInfo.innerHTML = `<li>Error: ${error.message}</li>`;
    }
}


findButton.addEventListener('click', () => {

    characterName.textContent = 'Loading...';
    characterInfo.innerHTML = '<li><i class="fa-solid fa-spinner fa-spin"></i> Loading...</li>';

    getRandomCharacter();
});
import { personnes } from './data.js';

function calculerAgeMoyen(personnes) {
    const totalAge = personnes.reduce((acc, personne) => acc + personne.age, 0);
    const ageMoyen = totalAge / personnes.length;
    console.log(`L'âge moyen est de ${ageMoyen.toFixed(2)} ans.`);
}

calculerAgeMoyen(personnes);
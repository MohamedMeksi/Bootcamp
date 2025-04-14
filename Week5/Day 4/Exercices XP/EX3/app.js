import { readFile, writeFile } from './fileManager.js';

async function main() {
    try {
        const content = await readFile('./Week5/Day 4/Exercices XP/EX3/Hello World.txt');
        console.log('Contenu lu:', content);
        await writeFile('./Week5/Day 4/Exercices XP/EX3/Bye World.txt', 'Écriture dans le fichier');
        console.log('Écriture réussie');
        const content2 = await readFile('./Week5/Day 4/Exercices XP/EX3/Bye World.txt');
        console.log('Contenu lu:', content2);   
    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
}
main();
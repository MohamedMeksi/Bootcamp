import fs from 'fs';
fs.readFile('./Week5/Day 4/Exercices XP/EX7/file-explorer/source.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('❌ Erreur de lecture:', err);
    return;
  }

  fs.writeFile('./Week5/Day 4/Exercices XP/EX7/file-explorer/destination.txt', data, (err) => {
    if (err) {
      console.error('❌ Erreur d\'écriture:', err);
    } else {
      console.log('✅ Contenu copié avec succès dans destination.txt');
    }
  });
});

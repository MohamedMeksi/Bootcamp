import fs from 'fs';
fs.readdir('.', (err, files) => {
  if (err) {
    console.error('Erreur de lecture du répertoire:', err);
    return;
  }

  console.log('📁 Fichiers dans le répertoire actuel :');
  files.forEach(file => {
    console.log('📄', file );
  });
});

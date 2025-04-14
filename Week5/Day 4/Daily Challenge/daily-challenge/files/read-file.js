
import fs from 'fs';
import path from 'path';

export function readFileContent() {
  const filePath = path.resolve('./files/file-data.txt');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error("Erreur lors de la lecture du fichier :", err);
    } else {
      console.log("📄 Contenu du fichier :");
      console.log(data);
    }
  });
}

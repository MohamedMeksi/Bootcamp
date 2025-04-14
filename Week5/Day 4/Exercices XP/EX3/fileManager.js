import fs from 'fs';
import path from 'path';

export function readFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(path.resolve(filePath), 'utf8', (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
}
export function writeFile(filePath, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path.resolve(filePath), content, 'utf8', (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
}
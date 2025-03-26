const sidebar = document.getElementById('sidebar');
const grid = document.getElementById('main');
const clearButton = document.querySelector('button');
let selectedColor = 'black'; 
let isDrawing = false;


for (let i = 0; i < 50 * 30; i++) {
    const cell = document.createElement('div');
    grid.appendChild(cell);

    // Début du dessin
    cell.addEventListener('mousedown', () => {
        isDrawing = true;
        cell.style.backgroundColor = selectedColor;
    });

    // Dessiner en glissant
    cell.addEventListener('mouseover', () => {
        if (isDrawing) {
            cell.style.backgroundColor = selectedColor;
        }
    });
}

// Arrêter de dessiner quand on relâche la souris
document.addEventListener('mouseup', () => {
    isDrawing = false;
});

// Sélectionner une couleur dans la palette
sidebar.querySelectorAll('div').forEach(colorDiv => {
    colorDiv.addEventListener('click', () => {
        selectedColor = colorDiv.style.backgroundColor;
    });
});

// Effacer toute la grille
clearButton.addEventListener('click', () => {
    grid.querySelectorAll('div').forEach(cell => {
        cell.style.backgroundColor = 'white';
    });
});

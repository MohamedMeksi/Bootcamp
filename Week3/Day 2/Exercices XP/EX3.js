// * Exercice 3 : Répétez la question

// !Demander à l'utilisateur de saisir un nombre.
// !Conseil : Vérifiez le type de données reçu à l'invite (c.-à-d. utilisez la typeofméthode).
// !While the number is smaller than 10 continue asking the user for a new number.
// !Tip : Which while loop is more relevant for this situation?
const prompt = require("prompt-sync")();

let number;

while (true) {
    number = prompt("Enter a number: ");
    number = Number(number);
    if (typeof number === "number" && !isNaN(number)) {
        if (number >= 10) {
            console.log("Good job!");
            break; }
    } else {
        console.log("Please enter a valid number.");
    }
}

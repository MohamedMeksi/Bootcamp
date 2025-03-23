// ! Exercice 5 : Famille
// Créez un objet appelé famille avec quelques paires clé-valeur;
const famile = {
    mère: "karima",
    père: "mohamed",
    fils: "samir",
    fille: "kamare"
}
// Using a for in loop, console.log the keys of the object.

for (const key in famile) {
    console.log(key);
}
// Using a for in loop, console.log the values of the object.

for (const value in famile) {
    console.log(famile[value]);
}

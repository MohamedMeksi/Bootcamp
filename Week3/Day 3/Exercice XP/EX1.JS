// !Créez un appel de fonction displayNumbersDivisible()qui ne prend aucun paramètre.
// !Dans la fonction, parcourez les nombres de 0 à 500.
// !Console.log tous les nombres divisibles par 23.
// !À la fin, console.log la somme de tous les nombres divisibles par 23.
// !Bonus : Ajoutez un diviseur de paramètres à la fonction.


function displayNumbersDivisible(divisor = 23) {
    let sum = 0;
    let numbre =[];
    for (let i = 0; i <= 500; i++) {
        if (i % divisor === 0) {
            sum += i;
            numbre.push(i);

        }
    }

    console.log("Outcome", numbre.join(" "));
    console.log(sum);
}
displayNumbersDivisible(3);
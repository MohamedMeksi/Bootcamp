// ! Exercice 4 : Gestion du bâtiment

// Copiez et collez l'objet ci-dessus dans votre fichier Javascript.

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

// Console.log le nombre d'étages du bâtiment.
console.log(building.numberOfFloors);

// Console.log how many apartments are on the floors 1 and 3.
console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.thirdFloor);

// Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(building.nameOfTenants[1]);
console.log(building.numberOfRoomsAndRent.dan[0]);

// Vérifiez si le loyer de Sarah et David est supérieur à celui de Dan. Si c'est le cas, augmentez le loyer de Dan à 1 200 £.

const sarahR = building.numberOfRoomsAndRent.sarah[1];
const davidR = building.numberOfRoomsAndRent.david[1];
const danR = building.numberOfRoomsAndRent.dan[1];

if (sarahR + davidR > danR) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
    console.log("Dan's rent has been increased to 1200.");
}

console.log("Rent for Dan:", building.numberOfRoomsAndRent.dan[1]);
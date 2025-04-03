const users = { user1: 18273, user2: 92833, user3: 90315 };

// En utilisant les méthodes enseignées en classe, transformez l' usersobjet en un tableau
const usersArray = Object.entries(users);
console.log(usersArray);

// Modifiez le résultat de la partie 1, en multipliant l'ID de l'utilisateur par 2.
const usersArrayMultiple = Object.entries(users).map(([key, value]) => [key, value * 2]);
console.log(usersArrayMultiple);
// !Exercise 7 : Secret Group

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
const secret_society = names
    .sort()
    .map(name => name[0])
    .join("");

// Console.log the name of their secret society. The output should be “ABJKPS”

console.log(secret_society);

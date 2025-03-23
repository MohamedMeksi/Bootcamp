// !Write code to remove “Greg” from the people array.
const people = ["Greg", "Mary", "Devon", "James"];
people.shift("Greg ");
console.log(people)

// !Write code to replace “James” to “Jason”.
people.splice(2, 1, "Jason");
console.log(people)

// !Write code to add your name to the end of the people array.
people.push("Mohamed");
console.log(people)

// !Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf("Mary"));

// !Write code to make a copy of the people array using the slice method.
// *The copy should NOT include “Mary” or your name.
//* Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
//* Hint: Check out the documentation for the slice method.
const copyPeople = people.slice(1, 3);
console.log(copyPeople);

// !Écrivez du code qui donne l'index de « Foo ». Pourquoi renvoie-t-il -1 ?
console.log(people.indexOf("Foo"));
// Il renvoie -1 car "Foo" n'existe pas dans le tableau people.


// !Create a variable called last which value is the last element of the array.
// !Hint: What is the relationship between the index of the last element in the array and the length of the array?

const last = people[people.length - 1];
console.log(last);

// Accède au dernier élément du tableau en utilisant la longueur du tableau moins 1.

//* Part II - Loops
// !Using a loop, iterate through the people array and console.log each person.
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

// !Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// !Hint: take a look at the break statement in the lesson.

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Devon") {
        break;
    }
}















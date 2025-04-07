// let colors = ["blue", "yellow", "green", 54]; 
// let favorite = colors[0];
// let secondFavorite = colors[2];
// console.log(favorite) // blue
// console.log(secondFavorite) // green    


// let colors = ["blue", "yellow", "green" ]; 
// colors.push("orange") 
// console.log(colors) // ["blue", "yellow", "green", "orange"];


// ! La push()méthode : ajoute un nouvel élément à la fin d'un tableau

// !La pop()méthode : supprime le dernier élément d'un tableau 

// !La splice()méthode : ajoute/supprime des éléments à un tableau
//* La splice()méthode : ajoute/supprime des éléments à un tableau
//* Le premier paramètre définit la position où les nouveaux éléments doivent être ajoutés (épissés).
// *Le second paramètre définit le nombre d'éléments à supprimer.
//* Les autres paramètres définissent les nouveaux éléments à ajouter.
//* La splice()méthode renvoie un tableau contenant les éléments supprimés :


// let colors = ["blue", "yellow", "green" ]; 
// let deletedItem = colors.splice(1, 1, 45, 23);
// console.log(deletedItem) //  ['yellow']
// console.log(colors) //  ["blue", 45, 23, "green"]; 

//! La slice()méthode : découpe une partie d'un tableau et crée un nouveau tableau.
//! Elle slice()crée un nouveau tableau. Elle ne supprime aucun élément du tableau source .
//! Elle sélectionne ensuite les éléments de l'argument de début jusqu'à l'argument de fin (exclu).

// let colors = ["blue", "yellow", "green", "pink" ]; 
// let favorite = colors.slice(2) 
// console.log(favorite) // ["green" , "pink"]; 
// console.log(colors) // ["blue", "yellow", "green", "pink" ];

// let secondFavorite = colors.slice(0,1) 
// console.log(secondFavorite) //[ 'blue' ]
// console.log(colors)// ["blue", "yellow", "green", "pink" ];


// !Vous pouvez joindre tous les éléments d'un tableau avec join()la méthode. Le contenu des parenthèses sera placé entre chaque élément.
// !Pour supprimer le premier élément, utilisezshift()
// !unshift({item})ajoutera un nouvel élément à l'en-tête de la liste. Il deviendra l'index 0.


  // const myFunc1 = (x, y) => {
  //   return console.log(x + y)
  // }
  
  // myFunc1(6,7)



  // function checkAge(age) {
  //   let message;
  //   if (age < 18) {
  //     message = "Sorry, you're too young.";
  //   } else {
  //     message = "Yay! You're old enough!";
  //   }
  //   return message;
  // }
  
  // console.log(checkAge(21));

//   function verify (name) {            // outer function  
//     function isJohn() {             // inner function
//         return name === "John";     // full access to argument        
//     }
//     if (isJohn()) {
//         alert("Yep, this is John");
//     }
// }
// verify("John");




// let c = { greeting: 'Hey!' };
// let d;

// d = c;
// c.greeting = 'Hello';
// console.log(d.greeting);

// let myCar = new Object();
// myCar.make = 'Ford';
// myCar.model = 'Mustang';
// myCar.year = 1969;

// function showProps(obj, objName) {
//   let result = '';
//   for (let i in obj) {
//     // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
//     if (obj.hasOwnProperty(i)) {
//       result += `${objName}.${i} = ${obj[i]}\n`;
//     }
//   }
//   return result;
// }

// const person = {
//   name: 'Lydia',
//   age: 21,
// };

// for (const item in person) {
//   console.log(item);
  
// }


// const numbers = [10,11,12,15,20];

// numbers.forEach((number, index) => {
//   console.log(number * 2);
// });

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   // Method
//   calcArea() {
//     return this.height * this.width;
//   }
// }

// //instance of the class Rectangle
// const square = new Rectangle(10, 10);

// //calling the method
// console.log(square.calcArea()); // 100

// console.log(square)


// class Rabbit {
//   constructor(type) {
//       this.type = type;
//   }
//   speak(line) {
//       console.log(`The ${this.type} rabbit says '${line}'`);
//   }
// }
// let killerRabbit = new Rabbit("killer");
// let blackRabbit = new Rabbit("black");

// console.log(killerRabbit.speak("I'm a killer rabbit!"));


let promise1 = new Promise((resolve, reject) => {
  resolve(1);
});
let promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve(2), 100);
});
Promise.all([promise1, promise2]).then(() => {
  console.log("Both promises resolved successfully.");
});




















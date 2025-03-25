// !Exercise 3 : What’s in my wallet ?

// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.

function changeEnough(itemPrice, amountOfChange) {
    const coinValues = [0.25, 0.10, 0.05, 0.01];
    let total = 0;
    for (let i = 0; i < amountOfChange.length; i++) {
        total += amountOfChange[i] * coinValues[i]; 
    }
    return total >= itemPrice
}
console.log(changeEnough(4.25, [25, 20, 5, 0]))
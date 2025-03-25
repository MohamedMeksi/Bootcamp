const prompt = require("prompt-sync")();

// !Définissez une fonction appelée hotelCost()

function hotelCost() {
    let nights = prompt("How many nights would you like to stay? ");
    while (isNaN(nights) || nights === "") {
        nights = prompt("Please enter a valid number of nights: ");
    }
    return Number(nights) * 140; 
}
// !Définissez une fonction appelée planeRideCost()

function planeRideCost() {
    let destination = prompt("What is your destination? ");
    while (!destination || !isNaN(destination)) {
        destination = prompt("Please enter a valid destination: ");
    }
    destination = destination.toLowerCase();
    if (destination === "london") {
        return 183; 
    } else if (destination === "paris") {
        return 220; 
    } else {
        return 300; 
    }
}

// !Définissez une fonction appelée rentalCarCost().

function rentalCarCost() {
    let days = prompt("How many days would you like to rent a car? ");
    while (isNaN(days) || days === "") {
        days = prompt("Please enter a valid number of days: ");
    }
    days = Number(days);
    let total = days * 40;
    if (days >= 10) {
        total -= total * 0.05; 
    }
    return total; 
}
// !Définissez une fonction appelée totalVacationCost()qui renvoie le coût total des vacances de l'utilisateur en appelant les trois fonctions créées ci-dessus.    
function totalVacationCost() {
    const hotel = hotelCost();
    const plane = planeRideCost();
    const car = rentalCarCost();
    const total = hotel + plane + car;

    console.log(
        `Total vacation cost: ${total} DH (Hotel: ${hotel} DH, Plane: ${plane} DH, Car: ${car} DH)`
    );
}

totalVacationCost();

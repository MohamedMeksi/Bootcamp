// !🌟 Exercice 2 : Liste de courses

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

// Créez un tableau contenant shoppingListles éléments suivants : « banane », « orange » et « pomme ». Cela signifie que vous avez une banane, une orange et une pomme dans votre panier.
const shoppingList = ["banana", "orange", "pear"];
// Créez une fonction appelée myBill()qui ne prend aucun paramètre.
function myBill() {
    let total = 0;
    for (let i = 0; i < shoppingList.length; i++) {
        if (stock[shoppingList[i]] > 0) {
            total += prices[shoppingList[i]];  
            stock[shoppingList[i]]--;  
        }
    }
    return total;
}

console.log(myBill());
console.log(stock);


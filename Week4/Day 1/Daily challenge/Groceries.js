
let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
};

const displayGroceries = () => {
    groceries.fruits.forEach(fruit => console.log(fruit));
};

const cloneGroceries = () => {
    let user = client; 
    client = "Betty"; 
    console.log("User:", user); 

    let shopping = groceries; 
    // !Reference to the groceries object
    shopping.totalPrice = "35$"; 
    // !Change totalPrice
    shopping.other.paid = false; 
    // !Change paid

    console.log("Groceries:", groceries); 
    // !Changes will be visible because objects are copied by reference.
    console.log("Shopping:", shopping); 
    // !Same reference as groceries
};

cloneGroceries();


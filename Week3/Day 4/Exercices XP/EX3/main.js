// Declare a global variable named allBoldItems.
var allBoldItems = document.getElementsByTagName("strong");


// Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
function getBoldItems() {
    var allBoldItems = document.getElementsByTagName("strong");
    return allBoldItems;
}

// Create a function called highlight() that changes the color of all the bold text to blue.
function highlight() {
    var allBoldItems = getBoldItems();
    for (var i = 0; i < allBoldItems.length; i++) {
        allBoldItems[i].style.color = "blue";
    }
}

// Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.

function returnItemsToDefault() {
    var allBoldItems = getBoldItems();
    for (var i = 0; i < allBoldItems.length; i++) {
        allBoldItems[i].style.color = "black";
    }
}

// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example

var para = document.querySelector("p");
para.addEventListener("mouseover", highlight);
para.addEventListener("mouseout", returnItemsToDefault);

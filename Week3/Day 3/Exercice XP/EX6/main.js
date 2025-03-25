// Change the id of the div
const navBar = document.getElementById("navBar");
navBar.setAttribute("id", "socialNetworkNavigation");

// Add a new <li> to the <ul>
const ul = navBar.querySelector("ul");
const newLi = document.createElement("li");
const textNode = document.createTextNode("Logout");
newLi.appendChild(textNode);
ul.appendChild(newLi);

// Retrieve and display the text of the first and last <li> elements

const first = ul.firstElementChild;
const last = ul.lastElementChild;

console.log("First link text:", first.textContent);
console.log("Last link text:", last.textContent);
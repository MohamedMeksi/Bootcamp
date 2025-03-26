// Using a DOM property, retrieve the h1 and console.log it.
const h1 = document.querySelector('h1');
console.log(h1);

// Using DOM methods, remove the last paragraph in the <article> tag.
const article = document.querySelector('article');
const lastParagraph = article.querySelector('p:last-of-type');
if (lastParagraph) {
    lastParagraph.remove();
}

//Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
const h2 = document.querySelector('h2');
h2.addEventListener('click', () => {
    h2.style.backgroundColor = 'red';
});

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
const h3 = document.querySelector('h3');
h3.addEventListener('click', () => {
    h3.style.display = 'none';
});

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
const button = document.createElement('button');
button.textContent = 'Make Paragraphs Bold';
document.body.appendChild(button);

button.addEventListener('click', () => {
    const paragraphs = document.querySelectorAll('article p');
    paragraphs.forEach(p => {
        p.style.fontWeight = 'bold';
    });
});

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
h1.addEventListener('mouseover', () => {
    const randomSize = Math.floor(Math.random() * 101); 
    h1.style.fontSize = `${randomSize}px`;
});

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
const secondParagraph = article.querySelector('p:nth-of-type(2)');
if (secondParagraph) {
    secondParagraph.style.transition = 'opacity 1s'; 
    secondParagraph.addEventListener('mouseover', () => {
        secondParagraph.style.opacity = '0';
    });
    secondParagraph.addEventListener('mouseout', () => {
        secondParagraph.style.opacity = '1';
    });
}



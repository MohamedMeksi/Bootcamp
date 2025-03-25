// Retrieve the div and console.log it
const containerDiv = document.getElementById('container');
console.log(containerDiv);

// Change the name “Pete” to “Richard”.
const lists = document.querySelectorAll('.list');
lists[0].children[1].textContent = 'Richard';

// Delete the second <li> of the second <ul>.
lists[1].children[1].remove();

// Change the name of the first <li> of each <ul> to your name.
lists.forEach(list => {
    list.children[0].textContent = 'YourName';
});

// Add a class called student_list to both of the <ul>'s.
lists.forEach(list => {
    list.classList.add('student_list');
});

// Add the classes university and attendance to the first <ul>.
lists[0].classList.add('university', 'attendance');

// Add a “light blue” background color and some padding to the <div>.
containerDiv.style.backgroundColor = 'lightblue';
containerDiv.style.padding = '10px';

// Do not display the <li> that contains the text node “Dan”.
const danLi = lists[1].children[2];
danLi.style.display = 'none';

// Add a border to the <li> that contains the text node “Richard”.
const richardLi = lists[0].children[1];
richardLi.style.border = '1px solid black';

// Change the font size of the whole body.
document.body.style.fontSize = '16px';

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y”.
if (containerDiv.style.backgroundColor === 'lightblue') {
    const users = Array.from(lists[0].children).map(li => li.textContent).join(' and ');
    alert(`Hello ${users}`);
}
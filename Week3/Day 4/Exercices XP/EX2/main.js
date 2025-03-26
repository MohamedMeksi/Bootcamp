// Retrieve the form and log it
const form = document.querySelector('form');
console.log(form);

// Retrieve the inputs by their id and log them
const firstNameInput = document.getElementById('fname');
const lastNameInput = document.getElementById('lname');
console.log(firstNameInput, lastNameInput);

// Retrieve the inputs by their name attribute and log them
const firstNameByName = document.getElementsByName('firstname')[0];
const lastNameByName = document.getElementsByName('lastname')[0];
console.log(firstNameByName, lastNameByName);

// Add event listener for form submission
form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    // Get the values of the input fields
    const firstNameValue = firstNameInput.value.trim();
    const lastNameValue = lastNameInput.value.trim();

    // Check if the inputs are not empty
    if (firstNameValue === '' || lastNameValue === '') {
        alert('Please fill out both fields.');
        return;
    }

    // Create an <li> for each input value and append them to the <ul>
    const usersAnswerList = document.querySelector('.usersAnswer');
    usersAnswerList.innerHTML = ''; 

    const firstNameLi = document.createElement('li');
    firstNameLi.textContent = firstNameValue;
    usersAnswerList.appendChild(firstNameLi);

    const lastNameLi = document.createElement('li');
    lastNameLi.textContent = lastNameValue;
    usersAnswerList.appendChild(lastNameLi);
});
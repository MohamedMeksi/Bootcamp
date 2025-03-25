// Create an array of books
const allBooks = [
    {
        title: "capital punishment",
        author: "victor gollancz",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXRlQIMnjMLzPSsblShEjA4nLp_t7haykxqA&s",
        alreadyRead: true,
    },
    {
        title: "davinci code",
        author: "dan brown",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/1200px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
        alreadyRead: false,
    },
];

// Select the section where books will be displayed
const listBooksSection = document.querySelector(".listBooks");

// Loop through the books and render them
allBooks.forEach((book) => {
    // Create a div for each book
    const bookDiv = document.createElement("div");

    // Create and append the title and author
    const bookDetails = document.createElement("p");
    bookDetails.textContent = `${book.title} written by ${book.author}`;
    if (book.alreadyRead) {
        bookDetails.style.color = "red";
    }
    bookDiv.appendChild(bookDetails);

    // Create and append the image
    const bookImage = document.createElement("img");
    bookImage.src = book.image;
    bookImage.style.width = "100px";
    bookDiv.appendChild(bookImage);

    // Append the book div to the section
    listBooksSection.appendChild(bookDiv);
});
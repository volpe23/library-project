const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => `${title} by ${author}, ${pages} pages, ${read ? 'has been read' : 'not read yet'}`;
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}

const harryPotter = new Book("Harry Potter", "JKR", 300, false);

const harryPotter2 = new Book("Harry Potter", "JKR", 300, false);

const harryPotter3 = new Book("Harry Potter", "JKR", 300, false);
myLibrary.push(harryPotter);
myLibrary.push(harryPotter2);
myLibrary.push(harryPotter3);

function displayBooks() {
    const container = document.querySelector('.container');
    container.innerHTML = '';
    myLibrary.forEach((book) => {
        const card = document.createElement('div');
        card.classList.add('card');
        const title = document.createElement('h3');
        title.textContent = book.title;
        card.append(title);
        container.append(card);
    });
}
const newBookButton = document.querySelector('#newBook');
newBookButton.addEventListener('click', (event) => {
    const bookTitle = document.querySelector('#title').value;
    const bookAuthor = document.querySelector('#author').value;
    const bookPages = document.querySelector('#pages').value;
    const isRead = document.querySelector('#read').value;

    addBookToLibrary(bookTitle, bookAuthor, bookPages, isRead);
    event.preventDefault();
    displayBooks();
});

displayBooks();

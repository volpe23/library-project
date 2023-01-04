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
    const modal = document.querySelector('.modal');
    const formTrigger = document.createElement('button');
    formTrigger.textContent = 'Add new book';
    formTrigger.addEventListener('click', () => {
        modal.classList.toggle('hidden');
    });
    const closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', () => modal.classList.toggle('hidden'));
    container.innerHTML = '';
    myLibrary.forEach((book, i) => {
        const card = document.createElement('div');
        card.classList.add('card');
        const title = document.createElement('h3');
        title.textContent = book.title;
        const author = document.createElement('p');
        author.textContent = book.author;
        const pages = document.createElement('p');
        pages.textContent = `${book.pages} pages`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.setAttribute('value', i);
        removeButton.classList.add('remove-button');
        removeButton.addEventListener('click', () => {
            myLibrary.splice(i, 1);
            modal.classList.toggle('hidden');
            displayBooks();
        });
        card.append(title, author, pages, removeButton);
        container.append(card);
    });
    
    container.append(formTrigger);
}

function getInputs() {
    const bookTitle = document.querySelector('#title');
    const bookAuthor = document.querySelector('#author');
    const bookPages = document.querySelector('#pages');
    const isReadCheck = document.querySelector('#read');
    return [bookTitle, bookAuthor, bookPages, isReadCheck];
}

function clearInputs() {
    getInputs().forEach((el) => {
        el.value = '';
        el.checked = false;
    });
}
const newBookButton = document.querySelector('#newBook');
newBookButton.addEventListener('click', (event) => {
    const bookTitle = document.querySelector('#title').value;
    const bookAuthor = document.querySelector('#author').value;
    const bookPages = document.querySelector('#pages').value;
    const isReadCheck = document.querySelector('#read').checked;

    addBookToLibrary(bookTitle, bookAuthor, bookPages, isReadCheck);
    event.preventDefault();
    clearInputs();
    displayBooks();
});

displayBooks();

const content = document.querySelector('#content');
// console.log(content)
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = () => `${title} by ${author}, ${pages} pages, ${read ? 'has been read' : 'not read yet'}`;
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, true);

console.log(theHobbit.title);
content.textContent = theHobbit.info();

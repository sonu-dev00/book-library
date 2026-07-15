


function Book(author , title , page) {
    this.author = author;
    this.title = title;
    this.page = page;
};

function addBookToLibrary(author , title , page ) {
    let books = new Book(author , title , page);
    MyLibrary.push(books);
}
const MyLibrary = [];
addBookToLibrary("sonu", "the lion" , 34);
addBookToLibrary("atomic habits" , "james clerk" , 45)
console.log(MyLibrary);

//show books on the page 
const display = document.getElementById("books");
display.innerHTML = "";
MyLibrary.forEach(book => {
    const newBook = document.createElement("div");
    newBook.classList.add("cards")
    const title = document.createElement("h3");
    const author = document.createElement("p");
    const page = document.createElement("p");
    newBook.appendChild(author);
    newBook.appendChild(title);
    newBook.appendChild(page);
    title.innerHTML = `${book.title}`;
    author.innerHTML = `${book.author}`;
    page.innerHTML =  `${book.page}`;
    display.appendChild(newBook);
    
});
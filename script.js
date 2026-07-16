const MyLibrary = [];


function Book(author , title , page, read) {
    this.read = read;
    this.author = author;
    this.title = title;
    this.page = page;
    this.id = crypto.randomUUID();
    
};

//prototype method 
Book.prototype.toggleRead = function () {
    this.read = !this.read;
}

function addBookToLibrary(author , title , page, read ) {
    let books = new Book(author , title , page , read);
    MyLibrary.push(books);
}
addBookToLibrary(" Making a New Science", "james clerk ", 45);
addBookToLibrary("The Hummingbird House", "Patricia Henley", 87)
displayBooks();


console.log(MyLibrary);

//show books on the page 
function displayBooks() {
const display = document.getElementById("books");
display.innerHTML = "";
MyLibrary.forEach(book => {
    const newBook = document.createElement("div");
    newBook.classList.add("cards")
    const title = document.createElement("h3");
    const author = document.createElement("p");
    const page = document.createElement("p");
    const deleteBtn = document.createElement("button");
    const readBtn = document.createElement("button");
    readBtn.textContent = book.read ? "Read" : "Not Read";
    deleteBtn.textContent = "delete" ;  
    
    newBook.appendChild(title);
    newBook.appendChild(author);
    newBook.appendChild(page);
    newBook.appendChild(deleteBtn);
    newBook.appendChild(readBtn); 
    title.innerHTML = `TITLE : ${book.title}`;
    author.innerHTML = `AUTHOR : ${book.author}`;
    page.innerHTML =  `PAGE : ${book.page}`;

    display.appendChild(newBook);
    //delete books
    deleteBtn.addEventListener('click' , () => {
        const index = MyLibrary.findIndex(item => item.id === book.id);

        MyLibrary.splice(index, 1);

        displayBooks();
    });
    //status of book
    readBtn.addEventListener('click', () => {
        book.toggleRead();
        displayBooks();
    })
})};


//Add new book to the library 
const dialog = document.querySelector("dialog");
const confirmBtn = document.getElementById("confirm");
const addBtn = document.getElementById("addBtn");
const newBook = document.getElementById("new-book")
addBtn.addEventListener("click", () => {
    dialog.showModal();
})

confirmBtn.addEventListener('click', () => {
    addedBook();
    newBook.reset();
    dialog.close();
})

function addedBook() {
    const newTitle = document.getElementById("title");
    const titleValue = newTitle.value;
    const newAuthor = document.getElementById("author");
    const authorValue = newAuthor.value;
    const newPage = document.getElementById("page");
    const pageValue = newPage.value;

    addBookToLibrary(authorValue, titleValue, pageValue);
    displayBooks();
    
}
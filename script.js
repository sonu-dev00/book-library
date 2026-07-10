
function book(title, author , page) {
    this.id = crypto.randomUUID();;  //gives random unique to each book
    this.title = title;
    this.author = author;
    this.page = page;
    
}

function addBookToLibrary(title , author , page) {
    let books = new book(title , author, page);
    MyLibrary.push(books); 
}

const MyLibrary = [];

//adds book to the MyLibrary
addBookToLibrary("atomic habit", "James Clerk", 23);
addBookToLibrary("brain rot", "sonu" , 34)
addBookToLibrary("the lion king", "zenk", 48)

console.log(MyLibrary);

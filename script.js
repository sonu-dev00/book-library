

function Book(title, author , page) {
    this.id = crypto.randomUUID();  //gives random unique to each book
    this.title = title;
    this.author = author;
    this.page = page;
    
}


function addBookToLibrary(title , author , page) {
    let books = new Book(title , author, page );
    MyLibrary.push(books); 
}


const MyLibrary = [];

//adds book to the MyLibrary
addBookToLibrary("atomic habit", "James Clerk", 23);
addBookToLibrary("brain rot", "sonu" , 34);
addBookToLibrary("sonu", "dont know " , 34);


console.log(MyLibrary);

//displays book on the page
const container = document.getElementById("container");

const cardHtml = MyLibrary.map(book => `
    <div class = "cards"> 
        <h3>${book.author}</h3>
        <p>${book.title}</p>
        <p>${book.page}</p>
        </div>`).join('');

        container.innerHTML = cardHtml;
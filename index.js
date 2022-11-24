let i = 0;
class Book {
    constructor(title, genre, author) {
        this._title = title;
        this._genre = genre;
        this._author = author;
        this._read = false;
        this._readDate = '';
    }
}
class BookList {
    constructor(books){
        this._books = books;
        let booksRead = this._books.filter(book => {
            book._read === true;
        });
        this._numBooksRead = booksRead.length;
        this._numBooksNotRead = this._books.length-this._numBooksRead;
        this._currentBook = this._books.find(book => {
            return book._read !== true;
        });
        let unreadBooks = this._books.filter(books => {
            return books._read === false
        })
        this._nextBook = unreadBooks[1];
        this._lastBook = "No books previously read";
    }
    get booksRead() {
        let booksRead = this._books.filter(book => {
            return book._read === true;
        });
        this._numBooksRead = booksRead.length;
        return this._numBooksRead
    }
    get booksNotRead() {
        let booksNotRead = this._books.filter(book => {
            return book._read === false;
        });
        this._numBooksNotRead = booksNotRead.length;
        return this._numBooksNotRead
    }
    add(book) {
        this._books.push(book);
        this.booksRead;
        this.booksNotRead;
    }
    finishCurrentBook(){
        this._currentBook._read = true;
        this._currentBook._readDate = Date(Date.now());
        this._lastBook = this._currentBook;
        if (this._nextBook === "No More Books in Book List"){
            this._currentBook = "You've finished your Book List!";
        }
        else {
            this._currentBook = this._nextBook;
        }
        let notRead = this._books.filter(book => {
            return book._read === false;
        });
        if (notRead == false) {
            this._nextBook = "Add More Books to your Book List";
        }
        else if (notRead.length === 1) {
            this._nextBook = "No More Books in Book List";
        }
        else {
            this._nextBook = notRead[1];
        }
        
    }
}

let LOTRFOTR = new Book ('Lord of the Rings: Fellowship of the Ring', 'Fantasy', 'J.R.R. Tolkien'); //creates new Book
let LOTRTTT = new Book ('Lord of the Rings: The Two Towers', 'Fantasy', 'J.R.R. Tolkien'); //creates new Book
let LOTRROTK = new Book ('Lord of the Rings: Return of the King', 'Fantasy', 'J.R.R. Tolkien'); //creates new Book
let theHobbit = new Book ('The Hobbit', 'Fantasy', 'J.R.R. Tolkien'); //creates new Book
let tolkienCollection = new BookList ([LOTRFOTR, LOTRTTT, LOTRROTK]); //creates new Book

console.log(tolkienCollection); //logs BookList to console
console.log(`Books not read on BookList: ${tolkienCollection.booksNotRead}`); // logs num books not read (3)
console.log(`Books read on BookList: ${tolkienCollection.booksRead}`); // logs num books read (0)
console.log(`Last Book: ${tolkienCollection._lastBook}`); // logs last book read (haven't read a book yet)
console.log(`Current Book: ${tolkienCollection._currentBook._title}`); // logs current book reading (first book that hasn't been read FOTR)
console.log(`Next Book: ${tolkienCollection._nextBook._title}`); // logs next book reading (next book that hasn't been read TTT)

tolkienCollection.add(theHobbit); //adds The Hobbit to the Book List
console.log(tolkienCollection); //logs BookList to console with the Hobbit added
console.log(`Books not read on BookList: ${tolkienCollection.booksNotRead}`); // logs num books not read (4)
console.log(`Books read on BookList: ${tolkienCollection.booksRead}`); // logs num books read (0)

LOTRROTK._read = true; // changes value of Return of the King to read
console.log(`Books not read on BookList: ${tolkienCollection.booksNotRead}`); // logs num books not read (3)
console.log(`Books read on BookList: ${tolkienCollection.booksRead}`); // logs num books read (1)

tolkienCollection.finishCurrentBook(); //finishes reading the current book (FOTR)
console.log(`Last Book: ${tolkienCollection._lastBook._title}`); // logs last book read (FOTR)
console.log(`Current Book: ${tolkienCollection._currentBook._title}`); // logs current book reading (TTT)
console.log(`Next Book: ${tolkienCollection._nextBook._title}`); // logs next book reading (the Hobbit [skips over ROTK because it has already been read])
console.log(`Books not read on BookList: ${tolkienCollection.booksNotRead}`); // logs num books not read (2)
console.log(`Books read on BookList: ${tolkienCollection.booksRead}`); // logs num books read (2)


tolkienCollection.finishCurrentBook(); //finishes reading the current book (TTT)
console.log(`Last Book: ${tolkienCollection._lastBook._title}`); // logs last book read (TTT)
console.log(`Current Book: ${tolkienCollection._currentBook._title}`); // logs current book reading (the Hobbit [skips over LOTRROTK because it has already been read])
console.log(`Next Book: ${tolkienCollection._nextBook}`); // logs next book reading (no books left)
console.log(`Books not read on BookList: ${tolkienCollection.booksNotRead}`); // logs num books not read (1)
console.log(`Books read on BookList: ${tolkienCollection.booksRead}`); // logs num books read (3)


tolkienCollection.finishCurrentBook(); //finishes reading the current book (the Hobbit)
console.log(`Last Book: ${tolkienCollection._lastBook._title}`); // logs last book read (the Hobbit)
console.log(`Current Book: ${tolkienCollection._currentBook}`); // logs current book reading ("You've finished your reading list")
console.log(`Next Book: ${tolkienCollection._nextBook}`); // logs next book reading ("Add More Books")
console.log(`Books not read on BookList: ${tolkienCollection.booksNotRead}`); // logs num books not read (0)
console.log(`Books read on BookList: ${tolkienCollection.booksRead}`); // logs num books read (4)


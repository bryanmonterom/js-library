function Book(title,author,pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.bookInfo = function(){
        return (`The ${title} by ${author}, ${pages} pages ${read}`)
    }
}

// const book1 = new Book('The Hobbit','J.R.R Tolkin', '295','not read yet')

// console.log(book1.bookInfo());

let myLibrary=[];

function Book(title,author,pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.bookInfo = function(){
        return (`The ${title} by ${author}, ${pages} pages ${read}`)
    }
}

function addBookToLibrary(){
    const newBook = new Book('Book1','The Author','99','false')
}

function findId(){
    let arrayLength = myLibrary.length == 0? 0: myLibrary.length;
    return arrayLength;
}

findId();
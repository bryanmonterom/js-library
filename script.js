let author ='';
let title = '';
let pages = '';
let read = false;


class Library {

    constructor(myLibrary){
        this.myLibrary = myLibrary ;
    }
}

class Book{
    constructor (title,author,pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

 set FindId(myLibrary){
    let arrayLength = myLibrary.length == 0? 0: myLibrary.length-1;
        this.id = arrayLength;
 }

}



// function Book(title,author,pages, read){
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     this.id=findId();
// }


function deleteBook(e){
        // let E = e.target.getAttribute('book-id');
        // console.log(E);
        const target = e.target.getAttribute('book-id');
        myLibrary.myLibrary = myLibrary.myLibrary.filter((item)=> item.title != target);
        tableBuilder(myLibrary.myLibrary);
    }


function buildBtnRemove(id){
    var btn = document.createElement('input');
    btn.type = "button";
    btn.className = "btn remove";
    btn.value = "Remove";
    btn.id=id;
    btn.setAttribute('book-id',id);
    btn.addEventListener('click',deleteBook)
    return btn;
}


// function deleteBook(e){
//     // let E = e.target.getAttribute('book-id');
//     // console.log(E);
//     const target = e.target.getAttribute('book-id');
//     myLibrary = myLibrary.filter((item)=> item.title != target);
//     tableBuilder();
// }

function buildBtnStatus(read,id){

    let status = read == true? "Read" : "Not Read"
    var btn = document.createElement('input');
    btn.type = "button";
    btn.className = "btn "+read;
    btn.value = status;
    // btn.id=id;
    btn.setAttribute('book-id',id);
    btn.addEventListener('click',changeStatus)
    return btn;
}



function tableBuilder(myLibrary){
    const tableBody = document.getElementById('tbody');
    tableBody.innerHTML= "";
    myLibrary.forEach(element => {
        let tr = document.createElement('tr');
        let tdTitle = document.createElement('td');
        tdTitle.textContent = element.title;
        let tdAuthor = document.createElement('td');
        tdAuthor.textContent = element.author;
        let tdPages = document.createElement('td');
        tdPages.textContent = element.pages;
        const tdRead = document.createElement('td');
        tdRead.appendChild(buildBtnStatus(element.read, element.title));
        const tdActions = document.createElement('td');
        tdActions.appendChild(buildBtnRemove(element.title));
        tr.appendChild(tdTitle);
        tr.appendChild(tdAuthor);
        tr.appendChild(tdPages);
        tr.appendChild(tdRead);
        tr.appendChild(tdActions);
        tableBody.appendChild(tr);
    });
}

function fillBookInfoVars(){
author = document.getElementById('author').value;
 title = document.getElementById('title').value;
 pages = document.getElementById('pages').value;
 read = document.getElementById('read').checked;
}





let library = [];
let myLibrary= new Library(library);
let btn = document.getElementById('save').addEventListener('click',addBookToLibrary);
// let btn = document.getElementById('form').addEventListener("submit", addBookToLibrary);

function addBookToLibrary(){
    fillBookInfoVars();
    const newBook = new Book(title,author,pages,read)
    newBook.FindId = library;
    myLibrary.myLibrary.push(newBook);
    tableBuilder(myLibrary.myLibrary);
}


function changeStatus(e){

    const target = e.target.getAttribute('book-id');
    var book = myLibrary.myLibrary.findIndex((item)=> item.title == target);
    console.log(book);
    myLibrary.myLibrary[book].read = !myLibrary.myLibrary[book].read;
    tableBuilder(myLibrary.myLibrary);

}

let author ='';
let title = '';
let pages = '';
let read = false;

let myLibrary=[];

function Book(title,author,pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id=findId();
    this.bookInfo = function(){
        return (`The ${title} by ${author}, ${pages} pages ${read}`)
    }
}


function tableBuilder(){
    const tableBody = document.getElementById('tbody');
    myLibrary.forEach(element => {
        let tr = document.createElement('tr');
        let tdTitle = document.createElement('td');
        tdTitle.textContent = element.title;
        let tdAuthor = document.createElement('td');
        tdAuthor.textContent = element.author;
        let tdPages = document.createElement('td');
        tdPages.textContent = element.pages;
        let tdRead = document.createElement('td');
        tdRead.textContent = element.pages;
        tr.appendChild(tdTitle);
        tr.appendChild(tdAuthor);
        tr.appendChild(tdPages);
        tr.appendChild(tdRead);
        tableBody.appendChild(tr);

    });
}

function fillBookInfo(){
author = document.getElementById('author').value;
 title = document.getElementById('title').value;
 pages = document.getElementById('pages').value;
 read = document.getElementById('read').value;
}

function addBookToLibrary(){
    fillBookInfo();
const newBook = new Book(title,author,pages,read)
myLibrary.push(newBook);
console.log(myLibrary);
    tableBuilder();
}

function findId(){
    let arrayLength = myLibrary.length == 0? 0: myLibrary.length;
    return arrayLength+1;
}

function btnSaveEventListener(){
}

findId();
let btn = document.getElementById('save').addEventListener('click',addBookToLibrary);


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
}


function buildBtnRemove(id){
    var btn = document.createElement('input');
    btn.type = "button";
    btn.className = "btn-remove";
    btn.value = "Remove";
    btn.id=id;
    btn.setAttribute('book-id',id);
    btn.addEventListener('click',deleteBook)
    return btn;
}


function deleteBook(e){
    const target = e.target.id
    myLibrary = myLibrary.filter((item)=> item.id != target);
    tableBuilder(myLibrary);
}
function buildBtnStatus(){

}

function appendTableRow(newBook){
    const tableBody = document.getElementById('tbody');
    let tr = document.createElement('tr');
        let tdTitle = document.createElement('td');
        tdTitle.textContent = newBook.title;
        let tdAuthor = document.createElement('td');
        tdAuthor.textContent = newBook.author;
        let tdPages = document.createElement('td');
        tdPages.textContent = newBook.pages;
        let tdRead = document.createElement('td');
        tdRead.textContent = newBook.read;
        const tdActions = document.createElement('td');
        tdActions.appendChild(buildBtnRemove(newBook.id));
        tr.appendChild(tdTitle);
        tr.appendChild(tdAuthor);
        tr.appendChild(tdPages);
        tr.appendChild(tdRead);
        tr.appendChild(tdActions);
        tableBody.appendChild(tr);

}



function tableBuilder(){
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
        let tdRead = document.createElement('td');
        tdRead.textContent = element.read;
        const tdActions = document.createElement('td');
        tdActions.appendChild(buildBtnRemove(element.id));
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

function addBookToLibrary(){

    fillBookInfoVars();
    const newBook = new Book(title,author,pages,read)
    myLibrary.push(newBook);
    // console.log(myLibrary);
    appendTableRow(newBook);
}

function remove(){

}

function findId(){
    let arrayLength = myLibrary.length == 0? 0: myLibrary.length;
    return arrayLength+1;
}

function btnSaveEventListener(){
}

tableBuilder();
findId();
let btn = document.getElementById('save').addEventListener('click',addBookToLibrary);


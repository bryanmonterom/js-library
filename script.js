let author = "";
let title = "";
let pages = "";
let read = false;

let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = findId();
  }
}


function buildBtnRemove(id) {
  var btn = document.createElement("input");
  btn.type = "button";
  btn.className = "btn remove";
  btn.value = "Remove";
  btn.id = id;
  btn.setAttribute("book-id", id);
  btn.addEventListener("click", deleteBook);
  return btn;
}

function deleteBook(e) {

  const target = e.target.getAttribute("book-id");
  myLibrary = myLibrary.filter((item) => item.title != target);
  tableBuilder();
}
function buildBtnStatus(read, id) {
  let status = read == true ? "Read" : "Not Read";
  var btn = document.createElement("input");
  btn.type = "button";
  btn.className = "btn " + read;
  btn.value = status;
  btn.setAttribute("book-id", id);
  btn.addEventListener("click", changeStatus);
  return btn;
}

function changeStatus(e) {
  const target = e.target.getAttribute("book-id");
  var book = myLibrary.findIndex((item) => item.title == target);
  console.log(book);
  myLibrary[book].read = !myLibrary[book].read;
  tableBuilder(myLibrary);
}


{/* <div class="card ">
<div class="card-header">Atomic Habits</div>
<div class="card-content">Author: James algo</div>
<div class="card-content">Pages: 99</div>
<div class="card-buttons">
    <input type="button" class="btn true" value="Read" book-id="Atomic Habits">
    <input type="button" class="btn remove" value="Remove" id="Atomic Habits" book-id="Atomic Habits">
</div>
</div> */}

function tableBuilder() {
  const tableBody = document.getElementById("tbody");
  tableBody.innerHTML = "";
  myLibrary.forEach((element) => {

    let card = document.createElement('div')
    card.classList.add('card');

    let header = document.createElement('div');
    header.classList.add('card-header')
    header.textContent = element.title;

    let divAuthor = document.createElement('div');
    divAuthor.classList.add('card-content')
    divAuthor.textContent = 'Author: '+element.author;

    let divPages = document.createElement('div');
    divPages.classList.add('card-content')
    divPages.textContent = 'Pages: '+element.pages;

    let divButtons = document.createElement('div');
    divButtons.classList.add('card-buttons')

    let status = buildBtnStatus(element.read, element.title)
    let remove = buildBtnRemove(element.title)

    divButtons.appendChild(status)
    divButtons.appendChild(remove)

    card.appendChild(header)
    card.appendChild(divAuthor)
    card.appendChild(divPages)
    card.appendChild(divButtons)

    tableBody.appendChild(card)

  document.getElementById("watchlist").textContent = myLibrary.length;
  document.getElementById("readbadge").textContent = myLibrary.filter(a=> a.read == true).length;





    // let tr = document.createElement("tr");
    // let tdTitle = document.createElement("td");
    // tdTitle.textContent = element.title;
    // let tdAuthor = document.createElement("td");
    // tdAuthor.textContent = element.author;
    // let tdPages = document.createElement("td");
    // tdPages.textContent = element.pages;
    // const tdRead = document.createElement("td");
    // tdRead.appendChild(buildBtnStatus(element.read, element.title));
    // const tdActions = document.createElement("td");
    // tdActions.appendChild(buildBtnRemove(element.title));
    // tr.appendChild(tdTitle);
    // tr.appendChild(tdAuthor);
    // tr.appendChild(tdPages);
    // tr.appendChild(tdRead);
    // tr.appendChild(tdActions);
    // tableBody.appendChild(tr);
  });
}

function fillBookInfoVars() {
  author = document.getElementById("author").value;
  title = document.getElementById("title").value;
  pages = document.getElementById("pages").value;
  read = document.getElementById("read").checked;
}

function addBookToLibrary(e) {
    console.log(e);
  e.preventDefault();
  fillBookInfoVars();
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  // console.log(myLibrary);
  tableBuilder();
}

const newBook1 = new Book('Atomic Habits', 'James Clear', 320, true);
myLibrary.push(newBook1);

const newBook2 = new Book('Little Book of Common Sense Investing', 'John C. Bogle', 287, true);
myLibrary.push(newBook2);

const newBook3 = new Book('The Subtle Art of Not Giving a F*ck', 'Mark Manson', 224, true);
myLibrary.push(newBook3);
const newBook5 = new Book('El caballero de la armadura oxidada', 'Robert Fisher', 112, true)
myLibrary.push(newBook5);

const newBook4 = new Book('A Random Walk Down Wall Street', 'Burton Malkiel', 464, false)
myLibrary.push(newBook4);



const newBook6 = new Book('The Four Agreements', 'Don Miguel Ruiz', 142, false)
myLibrary.push(newBook6);









let form = document.getElementById("formLibrary")


// document.getElementById("save").addEventListener("click", function (e) {
//   e.preventDefault();
//   form.submit();
// });

function findId() {
  let arrayLength = myLibrary.length == 0 ? 0 : myLibrary.length - 1;
  return arrayLength;
}

function btnSaveEventListener() {}

tableBuilder();
findId();
// let btn = document.getElementById('save').addEventListener('click',addBookToLibrary);



// let btn = document.getElementById('form').addEventListener("submit", addBookToLibrary);

const validators = {
  required: (element) => element.value.length > 0,
  noNumbers: (element) => element.value.match(/[0-9]/g),
  maxLength: (element) => element.value.length <= 10,
  minLength: (element) => element.value.length >= 1,
};

function validateElement(element) {
    resetValidation(element)
  const rules = element.dataset.validate.split(" ");
  rules.forEach((rule) => {
    if (validators[rule](element)) {
      return;
    } else {
      markElementInvalid(element, rule);
    }
  });
}

function markElementInvalid(element, validatorName) {
  element.classList.add("invalid");
  element.setAttribute("aria-invalid", true);
  const feedbackMessage = element.parentNode.querySelector(
    `[data-validation-message=${validatorName}]`
  );

  feedbackMessage.classList.add('message-visible');
  feedbackMessage.setAttribute('aria-hidden',false)
}


const formElements = Array.from(form.elements)

formElements.forEach(formElement=>{
    formElement.addEventListener('blur',()=>{
        validateElement(formElement)
    })
})

function resetValidation(element){
    element.classList.remove('invalid')
    element.setAttribute('aria-invalid',false)
    element
        .parentNode
        .querySelectorAll(["data-validation-message"])
        .forEach(e=>{
            e.classList.remove("message-visible");
            e.setAttribute('aria-hidden',true)
        })

}
 form = document.getElementById("formLibrary")


form.addEventListener("submit", event =>{
        event.preventDefault();
  
    let formIsValid = true;
    form.classList.toggle('invalid');
    const formElements = Array.from(form.elements)


    formElements.forEach(formElement =>{
        if(!formElement.dataset) return;
        if(!formElement.dataset.validate) return;
        validateElement(formElement)
    })

    let allInvalids = form.querySelector(".invalid");
    console.log(allInvalids)
    // formIsValid = form.querySelector(".invalid").length === 0;
    // formIsValid = fallInvalids === null? true: false;


    if(formIsValid === false){
        form.classList.add('invalid');
        event.preventDefault();
        return
    }else{
        addBookToLibrary(event)
        return


    }


})


function showModal(e){
var modal = document.getElementById('myModal');
modal.style.display="block";

//  btn.onclick=function(){
//         modal.style.display="block";
//     }



window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none"
    }
}
}
// addBookToLibrary);

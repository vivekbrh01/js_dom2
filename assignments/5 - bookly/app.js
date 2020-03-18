"use strict";

let id = 0;

let bookInput = document.querySelector(".add-book");

let addBookForm = document.querySelector("#add-book");

let addButton = document.querySelector(".add-btn");

let hideAll =document.querySelector("#hide")

let ul = document.querySelector('ul');

let search =document.querySelector('.search');

let allBooks = [];

function addBook(event) {
        event.preventDefault();
        let newBook = {
            bookName: bookInput.value,
            id: id++
        };
        allBooks.push(newBook);
        createUI(allBooks);
        bookInput.value = "";
}

function createUI(books = []) {

    ul.textContent = "";
    let booksUI = books.map(book => {
        return `<li>
                    <label data-id = ${book.id} class="name subname"> 
                        ${book.bookName}
                    </label>
                    <span data-id = ${book.id} class="delete">Delete</span>
                </li>`;
    });
    console.log(booksUI);
    ul.innerHTML = booksUI.join(" ");
}


function deleteBook(event) {
    if( event.target.classList.contains("delete") ) {
        let id = event.target.dataset.id;
        
        allBooks = allBooks.filter(book => book.id != id);
        createUI(allBooks);        
    }
}

hideAll.addEventListener("change", function(e) {
    if(hideAll.checked) {
        ul.style.display = "none";
    } else {
        ul.style.display = "initial";
    }
});


search.addEventListener("keyup", event => {
    let filteredBooks = allBooks.filter( book => {
        book.bookName.toLowerCase().includes(event.target.value.toLowerCase());
    });

    createUI(filteredBooks);
});

ul.addEventListener('click', deleteBook);

addBookForm.addEventListener('submit', addBook);

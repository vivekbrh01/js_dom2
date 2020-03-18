"use strict";

let input = document.querySelector('.input');
let ul = document.querySelector('.list');
let left = document.querySelector('.left');
let all = document.querySelector('.all');
let completed = document.querySelector('.completed');
let active = document.querySelector('.active');
let clear = document.querySelector('.clear');

let id = 0;
let sst = JSON.parse( localStorage.getItem('todos') ) || [];

function addTodo(e) {
    let text = input.value;

    if(e.keyCode == 13 && text.trim().length !== 0 ) {
        
        let obj = {
            text: input.value,
            checked: false,
            id: id++,
        };

        sst.push(obj);
        createUI(sst);
        input.value = " ";
    }
    localStorage.setItem("todos", JSON.stringify(sst));
}

function deleteTodo(e) {
    let id = e.target.parentElement.dataset.uid;
    sst = sst.filter(todo => todo.id != id);
    createUI(sst);
    localStorage.setItem("todos", JSON.stringify(sst));
};

function toggleTodo(e) {
    let id = e.target.parentElement.dataset.uid;
    
    sst = sst.map(todo => {
        if (todo.id == id) {
            todo.checked =!todo.checked;
        }
        return todo;
    });
    createUI(sst);
    localStorage.setItem("todos", JSON.stringify(sst));
};

function itemsLeft() {
    let itemsLeft = sst.filter(t => !t.checked);
    left.innerText = `${itemsLeft.length} items left`; 
} ;

function completedTodo() {
    let completedTodo = sst.filter(todo => todo.checked);
    createUI(completedTodo);
};

function activeTodo() {
    let activeTodo = sst.filter(todo => !todo.checked);
    createUI(activeTodo);
};

function allTodo() {
    createUI(sst);
};

function clearTodo() {
    sst = sst.filter(todo => !todo.checked);
    createUI(sst);
};

function createUI(todos = []) {
    console.log(todos);
    ul.innerHTML = "";

    todos.forEach(todo => {
        var li = document.createElement('li');
        li.setAttribute('data-uid', todo.id)
        
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('click', toggleTodo)
        checkbox.checked = todo.checked;
        
        var p = document.createElement('p');
        p.innerText = todo.text;
        
        var span = document.createElement('span');
        span.innerText = "X";
        span.addEventListener('click', deleteTodo)
        li.append(checkbox, p, span);
        ul.append(li);
    });
    itemsLeft();
};

createUI(sst);

input.addEventListener('keyup', addTodo);

completed.addEventListener('click', completedTodo);

active.addEventListener('click', activeTodo);

all.addEventListener('click', allTodo);

clear.addEventListener('click', clearTodo);
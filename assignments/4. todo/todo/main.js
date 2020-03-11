"use strict";

let input = document.querySelector('input[type = "text"]');
let ul = document.querySelector("ul");
let left = document.querySelector('.left');
let all = document.querySelector('.all');
let completed = document.querySelector('.completed');
let active = document.querySelector('.active');
let clear = document.querySelector('.clear');



let id = "todo-";
let sst = [];

function addTodo(e) {
   let trimmer = input.value;
   if (e.keyCode == 13 && trimmer.trim().length !== 0) {
      const obj = {
         text: input.value,
         checked: false,
         id: id + Math.floor(Math.random() * 2000000),
      };
      sst.push(obj);
      createUI(sst);
      input.value = "";
   }
}


function deleteTodo(e) {
   let id = e.target.parentElement.dataset.uid;
   sst = sst.filter(todo => todo.id !== id);

   createUI(sst);
}

function toggleTodo(e) {
   let id = e.target.parentElement.dataset.uid;

   sst = sst.map(todo => {
      if (todo.id === id) {
         todo.checked = !todo.checked
      }
      return todo;
   });  
   createUI(sst);
   // console.log(sst);
}

function itemsLeft() {
   let itemsLeft = sst.filter( t => !t.checked);
   left.innerText = `${itemsLeft.length} items left `;
}

function createUI( todos = [] ) {
   console.log(todos);
   ul.innerHTML = "";
   todos.forEach( todo => {
      let li = document.createElement('li');
      li.setAttribute('data-uid', todo.id);
      let input = document.createElement('input');
      input.type = "checkbox";
      input.addEventListener('click', toggleTodo);
      input.checked = todo.checked;
      let p = document.createElement('p');
      p.innerText = todo.text;
      let span = document.createElement('span');
      span.innerText = "X";
      span.addEventListener('click', deleteTodo)

      li.append(input, p, span);
      ul.append(li);
   });

   itemsLeft();
   console.log(sst, "create ui");
   
} 

all.addEventListener('click', () => {
   createUI(sst);
});

completed.addEventListener('click', () => {
   let completedTodo = sst.filter(todo => todo.checked);
   createUI(completedTodo);
});

active.addEventListener('click', () => {
   let activeTodo = sst.filter(todo => !todo.checked);
   createUI(activeTodo);
});

clear.addEventListener('click', () => {
   let clearTodo = sst.filter(todo => !todo.checked);
   sst = clearTodo;
   createUI(sst);
});

createUI(sst);

input.addEventListener('keyup', addTodo);

const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
// == const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    console.log(typeof(li.id));
    console.log(li.id);
    toDos.forEach(item => console.log(item.id));
    toDos = toDos.filter(todo => todo.id !== parseInt(li.id));
    console.log(typeof(parseInt(li.id)));
    saveToDos();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    // span.id = newTodo.id;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
    // console.log(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value; 
    // console.log(todoInput.value);
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    // console.log(newTodoObj);
    saveToDos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}
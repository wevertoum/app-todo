var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
    'fazer cafe',
    'estudar js',
    'acessar comunidade'
];

function renderTodos() {
    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        todoElement.className = "list-group-item";
        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
    }
}

function addStyleList() {

    var contElement = document.querySelectorAll('li');
    contElement.forEach((e) => {
        e.className = "list-group-item";
    })
}

window.onload = renderTodos;

function addTodo() {
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
}

buttonElement.onclick = addTodo;
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
    listElement.innerHTML = '';

    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#');
        /* adiciona o bootstrap no botão */
        linkElement.className = "btn btn-danger";

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' +  pos + ')'); 

        var linkText = document.createTextNode('Excluir');
        

        linkElement.appendChild(linkText)
        /* adiciona o bootstrap na lista */
        todoElement.className = "list-group-item";

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

window.onload = renderTodos;

function addTodo() {
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

/* exclui o TODO da lista de array*/

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}
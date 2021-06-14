const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
filterOption.addEventListener("click", filterTodo);
todoList.addEventListener("click", deleteCheck);
todoButton.addEventListener("click", addTodo);

function addTodo(event) {
  event.preventDefault();
  // creat the hole todo div

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // creat todo li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //creat check button
  const completeButton = document.createElement("button");
  completeButton.innerHTML = '<i class= "fas fa-check"></i>';
  completeButton.classList.add("complete-btn");
  todoDiv.appendChild(completeButton);
  //creat delete button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class= "fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  if (todoInput.value !== "") {
    todoList.appendChild(todoDiv);
  }
  todoInput.value = "";
}
function deleteCheck(e) {
  const item = e.target;
  if (item.classList.contains("trash-btn")) {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
function filterTodo(e) {
  const todos = todoList.childNodes;
  console.log(e.target.value);
  todos.forEach((todo) => {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;

      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "Uncompleted":
        if (todo.classList.contains("completed")) {
          todo.style.display = "none";
        } else {
          todo.style.display = "flex";
        }
        break;
    }
  });
}

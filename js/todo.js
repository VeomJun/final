const jsToDoForm = document.querySelector(".js-toDoForm"),
  jsToDoInput = jsToDoForm.querySelector(".js-toDoInput");
const jsList = document.querySelector(".js-list");

const TODO = "todos";
let ARRAY = [];

function saveToDo() {
  localStorage.setItem(TODO, JSON.stringify(ARRAY));
}

function deleteBtn(event) {
  const { target } = event;
  const ItsId = target.parentElement;
  jsList.removeChild(ItsId);
  const newARRAY = ARRAY.filter(function(filter) {
    return filter.id !== JSON.parse(ItsId.id);
  });
  ARRAY = newARRAY;
  saveToDo();
}

function showToDos(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  const idCount = ARRAY.length + 1;
  span.innerText = text;
  button.innerText = "❌";
  button.addEventListener("click", deleteBtn);
  li.appendChild(span);
  li.appendChild(button);
  li.id = idCount;
  jsList.appendChild(li);
  const toDoObj = {
    text,
    id: idCount
  };
  ARRAY.push(toDoObj);
  saveToDo();
}

function inputTodos(event) {
  event.preventDefault();
  const todoValue = jsToDoInput.value;
  console.log(todoValue);
  showToDos(todoValue);
  jsToDoInput.value = "";
}

function loadToDos() {
  const currentToDos = localStorage.getItem(TODO);
  if (currentToDos) {
    const storedToDos = JSON.parse(currentToDos);
    storedToDos.forEach(function(hello) {
      showToDos(hello.text);
    });
  }
}

function init() {
  loadToDos();
  jsToDoForm.addEventListener("submit", inputTodos);
}
init();

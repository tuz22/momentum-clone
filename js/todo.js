const toDoForm = document.querySelector('#todoForm');
const toDoInput = document.querySelector('#todoForm input');
const toDoList = document.querySelector('#todoList');

function writeToDo(item){
  const li = document.createElement('li');
  const span = document.createElement('span');

  li.appendChild(span);
  span.innerHTML = item;
  toDoList.appendChild(li);
}

function handleToDoSubmit(e){
  e.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  writeToDo(newTodo);
}
toDoForm.addEventListener('submit', handleToDoSubmit);


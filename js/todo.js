const toDoForm = document.querySelector('#todoForm');
const toDoInput = document.querySelector('#todoForm input');
const toDoList = document.querySelector('#todoList');

function deleteToDo(e){
  const li = e.target.parentElement;
  li.remove();
}

function writeToDo(item){
  const li = document.createElement('li');
  const span = document.createElement('span');
  const button = document.createElement('button');

  li.appendChild(span);
  li.appendChild(button);
  span.innerHTML = item;
  button.innerHTML = 'X';

  button.addEventListener('click', deleteToDo);
  toDoList.appendChild(li);
}

function handleToDoSubmit(e){
  e.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";

  writeToDo(newTodo);
}
toDoForm.addEventListener('submit', handleToDoSubmit);


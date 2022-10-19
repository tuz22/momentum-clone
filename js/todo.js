const toDoForm = document.querySelector('#todoForm');
const toDoInput = document.querySelector('#todoForm input');
const toDoList = document.querySelector('#todoList');
let toDos = [];

function savedToDo(){
  localStorage.setItem('todos',JSON.stringify(toDos));
}

function deleteToDo(e){
  const li = e.target.parentElement;
  li.remove();
  toDos = toDos.filter((data) => data.id !== parseInt(li.id));
  savedToDo();
}

function writeToDo(item){
  const li = document.createElement('li');
  const span = document.createElement('span');
  const button = document.createElement('button');

  li.id = item.id;
  li.appendChild(span);
  span.innerHTML = item.text;
  
  li.appendChild(button);
  button.innerHTML = 'X';
  button.addEventListener('click', deleteToDo);
  toDoList.appendChild(li);
}

function handleToDoSubmit(e){
  e.preventDefault();
  
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };

  toDos.push(newTodoObj);
  writeToDo(newTodoObj);
  savedToDo();
}
toDoForm.addEventListener('submit', handleToDoSubmit);

/* 새로고침 시 투두리스트 불러오기 */
const getTodos = localStorage.getItem('todos');
if (getTodos){
  const parsedTodos = JSON.parse(getTodos);
  toDos = parsedTodos;
  parsedTodos.forEach(writeToDo);
}
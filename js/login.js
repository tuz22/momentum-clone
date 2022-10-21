const loginForm = document.querySelector('#loginForm');
const loginInput = document.querySelector('#loginForm input');
const todoForm = document.querySelector('#todoForm');
const helloText = document.querySelector('#hello');

function loginSubmit(e) {
  const userName = loginInput.value;

  e.preventDefault();
  loginForm.classList.add('hidden');
  todoForm.classList.remove('hidden');
  localStorage.setItem('userName', userName);

  hello(userName);
}

function hello(userName){
  helloText.innerHTML = `Hello ${userName}`;
  helloText.classList.remove('hidden');
}

  const savedUserName = localStorage.getItem('userName');

  if (savedUserName == null) {
    loginForm.classList.remove('hidden');
    loginForm.addEventListener('submit', loginSubmit);
  } else {
      todoForm.classList.remove('hidden');
      hello(savedUserName);
  }

const loginForm = document.querySelector('#loginForm');
const loginInput = document.querySelector('#loginForm input');
const mainPage = document.querySelector('#main');

function loginSubmit(e) {
  const userName = loginInput.value;

  e.preventDefault();
  loginForm.classList.add('hidden');
  localStorage.setItem('userName', userName);

  hello(userName);
}

function hello(userName){
  mainPage.innerHTML = `Hello ${userName}`;
  mainPage.classList.remove('hidden');
}

  const savedUserName = localStorage.getItem('userName');

  if (savedUserName == null) {
    loginForm.classList.remove('hidden');
    loginForm.addEventListener('submit', loginSubmit);
  } else {
      hello(savedUserName);
  }

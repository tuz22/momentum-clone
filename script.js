const loginForm = document.querySelector('#loginForm');
const loginInput = document.querySelector('#loginForm input');
const mainPage = document.querySelector('#main');

function loginSubmit(e) {
  const userName = loginInput.value;

  e.preventDefault();
  console.log(userName);

  loginForm.classList.add('hidden');
  localStorage.setItem('userName', userName);

  mainPage.innerHTML = `Hello ${userName}`;
  mainPage.classList.remove('hidden');
}

loginForm.addEventListener('submit', loginSubmit);
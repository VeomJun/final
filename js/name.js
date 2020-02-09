const jsnameForm = document.querySelector(".js-nameForm"),
  jsnameInput = jsnameForm.querySelector(".js-nameInput");
const jsName = document.querySelector(".js-name");
const changeName = document.querySelector(".js-changeName");
const NICK = "name";
const SHOWING = "showing";

function rememberMe(me) {
  localStorage.setItem(NICK, me);
}

function whatIsYour(event) {
  event.preventDefault();
  const theValue = jsnameInput.value;
  if (theValue === "") {
    event.preventDefault();
  } else {
    rememberMe(theValue);
    showName(theValue);
  }
}

function askName() {
  jsnameForm.classList.add(SHOWING);
  jsnameForm.addEventListener("submit", whatIsYour);
}

function showName(text) {
  jsnameForm.classList.remove(SHOWING);
  jsName.classList.add(SHOWING);
  jsName.innerText = `Welcome back, ${text}`;
}

function yourName() {
  const getName = localStorage.getItem(NICK);
  if (getName === null) {
    askName();
  } else {
    showName(getName);
  }
}

function react() {
  localStorage.removeItem(NICK);
  jsnameForm.classList.add(SHOWING);
  jsName.classList.remove(SHOWING);
  yourName();
}

function init() {
  yourName();
  changeName.addEventListener("click", react);
}
init();

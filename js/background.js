const classic = document.querySelector(".classic");
const reLocation = document.querySelector(".js-location");

function randomImg() {
  const int = Math.random() * 3 + 1;
  const floor = Math.floor(int);
  console.log(floor);
  classic.style.backgroundImage = `url(./img/${floor}.jpg)`;
  reLocation.style.backgroundColor = "black";
  reLocation.style.color = "white";
  if (floor === 1) {
    classic.style.color = "#e15f41";
  } else if (floor === 2) {
    classic.style.color = "#1e272e";
  } else {
    classic.style.color = "#ffffff";
  }
}

function init() {
  randomImg();
}
init();

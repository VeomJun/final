const jsClock = document.querySelector(".js-clock");

function timeGoes() {
  const time = new Date();
  let hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  let timeLine = "AM";
  if (hours > 12) {
    timeLine = "PM";
    hours = hours - 12;
    jsClock.innerText = `${timeLine} ${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds}`;
  } else {
    jsClock.innerText = `${timeLine} ${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds}`;
  }
}

timeGoes();
setInterval(timeGoes, 1000);

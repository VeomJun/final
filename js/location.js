const jsLocation = document.querySelector(".js-location");

const API_KEY = "79cceef112a7e70a4d5d39dd2d099921";
const INFO = "locationInfo";

function getlocation(lat, lon) {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log(json);
      const temperature = json.main.temp;
      const weather = json.weather[0].description;
      const place = json.name;
      jsLocation.innerText = `${temperature}℃ location: ${place} weather: ${weather} `;
    });
}

function saveLocation(location) {
  localStorage.setItem(INFO, JSON.stringify(location));
}

function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const locationObj = {
    latitude,
    longitude
  };
  getlocation(latitude, longitude);
  saveLocation(locationObj);
}

function fail() {
  console.log("fail");
}

function askLocation() {
  navigator.geolocation.getCurrentPosition(success, fail);
}

function findLocation() {
  const currentLocation = localStorage.getItem(INFO);
  if (currentLocation === null) {
    askLocation();
  } else {
    const parsedLocation = JSON.parse(currentLocation);
    getlocation(parsedLocation.latitude, parsedLocation.longitude);
  }
}

function init() {
  findLocation();
}
init();

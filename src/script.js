function displayWeather(response) {
  let currentTemperature = response.data.temperature.current;
  let currentTemperatureElement = document.querySelector("#current-temperature");
  let cityElement = document.querySelector("#current-city");

  cityElement.innerHTML = response.data.city;
  currentTemperatureElement.innerHTML = Math.round(currentTemperature);
  
  let currentDescription = response.data.condition.description;
  let currentDescriptionElement = document.querySelector("#description");
  currentDescriptionElement.innerHTML = `${currentDescription}`;

  let currentHumidity = response.data.temperature.humidity;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${currentHumidity}`;

  let windSpeed = response.data.wind.speed;
  let windSpeedElement = document.querySelector("#wind-speed");
  windSpeedElement.innerHTML = `${windSpeed}`;
}
function searchCity(city) {
  let apiKey = "ofa9b4df40ba3b4e1688atf2bb780ddd";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInputElement.value}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}
function searchSubmit(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  searchCity(searchInput.value);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let day = date.getDay();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let formatDay = days[day];
  return `${formatDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchSubmit);

let currentDateElement = document.querySelector("#current-date");
let currentDate = new Date();
currentDateElement.innerHTML = formatDate(currentDate);

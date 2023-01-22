let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  oslo: {
    temp: -5,
    humidity: 20
  }
};

let cityName = prompt("Enter a city");
cityName = cityName.toLowerCase();

if (weather[cityName] !== undefined) {
  let temperature = weather[cityName].temp;
  let humidity = weather[cityName].humidity;
  let celsiusTemperature = Math.round(temperature);
  let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);

  alert(
    `It is currently ${celsiusTemperature}°C (${fahrenheitTemperature}°F) in ${cityName} with a humidity of ${humidity}%.`
  );
} else {
  alert(
    `Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${cityName}`
  );
}

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let days = [
  "Sunday",
  "Monday ",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let currentDate1 = new Date();
let cDay = currentDate1.getDate();
let cMonth = months[currentDate1.getMonth()];
let cYear = currentDate1.getFullYear();
let cDayWeek = days[currentDate1.getDay()];

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

const d = new Date();
let h = d.getHours();
let m = addZero(d.getMinutes());
let ctime = h + ":" + m;

document.querySelector(".currentDate").innerHTML = `${cDayWeek} ${ctime}`;

function showWeather(response) {
  console.log(response);
  document.querySelector(`#currentCity`).innerHTML = `${response.data.name}`;
  document.querySelector(`#tempnow`).innerHTML = `${response.data.main.temp} F`;
}

function searchCity(city) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showWeather);
}

function retrieveSearchLocation(position) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
  axios.get(url).then(showWeather);
}
function getSearchPosition(event) {
  event.preventDefault();
  let city = document.querySelector("#city-search").value;
  searchCity(city);
}

function getCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(retrieveSearchLocation);
}

let currentElement = document.querySelector("#currentbtn");
currentElement.addEventListener("click", getCurrentPosition);

let searchElement = document.querySelector("#searchbtn");
searchElement.addEventListener("click", getSearchPosition);

searchCity("New York");

  
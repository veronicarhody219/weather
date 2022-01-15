let weather = {
  apiKey: "7db4b276ae57df67954d1fa913759050",

  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const {name} = data;
    const {icon, description} = data.weather[0];
    const {temp, humidity} = data.main;
    const {speed} = data.wind;
    const {country} = data.sys;
    console.log(name, icon, description, temp, humidity, speed, country);
    document.querySelector(".city").innerText = name + ", " + country;
    document.querySelector(".icon").src =
      "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temperature").innerText = Math.round(temp) + "°C";
    document.querySelector(".description").innerText = description;
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed: " + speed + "kph";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?landscape," + name + "')";
  },
  search: function () {
    const searchTerm = document.querySelector(".search-bar").value;
    this.fetchWeather(searchTerm);
  },
};



document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});
document
  .querySelector(".search-bar")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Ha Long");
console.log(navigator.geolocation);

// const apiKey = "faf9aa1b52fc33a0599c634c8ee6035a";
// const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

//   const url = `api.openweathermap.org/data/2.5/weather?q=halong&units=metric&appid=faf9aa1b52fc33a0599c634c8ee6035a`

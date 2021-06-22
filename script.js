const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
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
  "December",
];
const d = new Date();
const temperatures = document.querySelector(".temp");
const descriptionValue = document.querySelector(".description");
const dateAndTime = document.querySelector(".date-time");
const windSpeed = document.querySelector(".wind");
const dayOne = document.querySelector(".day1");
const dayTwo = document.querySelector(".day2");
const dayThree = document.querySelector(".day3");
const fetchWeatherData = async () => {
  const data = await fetch("https://goweather.herokuapp.com/weather/Dhaka")
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.error(err));

  temperatures.innerHTML = `${data.temperature.replace("+", "")}`;
  descriptionValue.innerHTML = `${data.description}`;
  dateAndTime.innerHTML = `${days[d.getDay()]}, ${d.getDate()} ${
    months[d.getMonth()]
  } `;
  windSpeed.innerHTML = `Wind speed: ${data.wind}`;

  dayOne.innerHTML = `<div class ="day-forecast">${
    days[d.getDay() + Number(data.forecast[0].day)]
  }</div> <div class = "forecast-temp1">${data.forecast[0].temperature.replace(
    "+",
    ""
  )}</div> 
  <div class ="forecast-wind1"> Wind: ${data.forecast[0].wind}</div>`;
  dayTwo.innerHTML = `<div class ="day-forecast">${
    days[d.getDay() + Number(data.forecast[1].day)]
  }</div> <div class = "forecast-temp2">${data.forecast[1].temperature.replace(
    "+",
    ""
  )}</div> 
  <div class ="forecast-wind2"> Wind: ${data.forecast[1].wind}</div>`;
  dayThree.innerHTML = `<div class ="day-forecast">${
    days[d.getDay() + Number(data.forecast[2].day)]
  }</div> <div class = "forecast-temp3">${data.forecast[2].temperature.replace(
    "+",
    ""
  )}</div> 
  <div class ="forecast-wind3"> Wind: ${data.forecast[2].wind}</div>`;
};
fetchWeatherData();

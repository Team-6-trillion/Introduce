// Weather API 날씨
const API_KEY = config.apikey;

const paintWeather = (temp, weatherIconCode) => {
  const weatherSpan = document.querySelector(".weather > span");

  const weatherWrap = document.querySelector(".weather");
  const weatherIconImg = document.createElement("img");
  weatherIconImg.src = `icons/weatherIcons/${weatherIconCode}.png`;
  weatherSpan.innerText = `${temp}°`;
  weatherWrap.prepend(weatherIconImg);
};

/* jQuery로 변환
const paintWeather = (temp, weatherIconCode) => {
  const $weatherSpan = $(".weather > span");

  const $weatherWrap = $(".weather");
  const $weatherIconImg = $("<img>");
  $weatherIconImg.attr("src", `icons/weatherIcons/${weatherIconCode}.png`);
  $weatherSpan.text(`${temp}°`);
  $weatherWrap.prepend($weatherIconImg);
};
*/

// 위치 갖고오는 함수
const getCurrentLocation = (position) => {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  getWeatherInfo(lat, lon);
};

const getWeatherInfo = async (lat, lon) => {
  const celsius = "metric";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${celsius}&appid=${API_KEY}`;
  const response = await fetch(url);
  const jsonData = await response.json();
  let temp = jsonData.main.temp;
  let weatherIconCode = jsonData.weather[0].icon;
  paintWeather(temp, weatherIconCode);
};

const getWeather = () => {};
// 에러 발생 시 함수
const errorCallback = (err) => {
  console.error(err);
};

navigator.geolocation.getCurrentPosition(getCurrentLocation, errorCallback);

// °

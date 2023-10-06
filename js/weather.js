// Weather API 날씨
const API_KEY = "64779c24be2bccf0ecbb74005b638849";

const paintWeather = (temp, weatherIconCode) => {
  const weatherSpan = document.querySelector(".weather > span");
  // const weatehrIcon = document.querySelector(".weather span:last-child");
  const weatherWrap = document.querySelector(".weather");
  const weatherIconImg = document.createElement("img");
  weatherIconImg.src = `../icons/weatherIcons/${weatherIconCode}.png`;
  weatherSpan.innerText = `${temp}°`;
  // weatehrIcon.appendChild(weatherIconImg);
  weatherWrap.appendChild(weatherIconImg);
};

// 위치 갖고오는 함수
const getCurrentLocation = async (position) => {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let celsius = "metric";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${celsius}&appid=${API_KEY}`;
  const response = await fetch(url);
  const jsonData = await response.json();
  let temp = jsonData.main.temp;
  let weatherIconCode = jsonData.weather[0].icon;
  paintWeather(temp, weatherIconCode);
};

// 에러 발생 시 함수
const errorCallback = (err) => {
  console.error(err);
};

navigator.geolocation.getCurrentPosition(getCurrentLocation, errorCallback);

// °

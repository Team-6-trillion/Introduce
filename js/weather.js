// Weather API 날씨
const API_KEY = "64779c24be2bccf0ecbb74005b638849";

const paintWeather = (temp, city) => {
  const weather = document.querySelector(".weather > span");
  weather.innerText = `${temp}° / ${city}`;
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
  let city = jsonData.name;
  paintWeather(temp, city);
};

// 에러 발생 시 함수
const errorCallback = (err) => {
  console.error(err);
};

navigator.geolocation.getCurrentPosition(getCurrentLocation, errorCallback);

// °

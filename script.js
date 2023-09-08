const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c646703221msh8b53034e9b8cda2p11e293jsnc783643ca0dd",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) => {
  cityName.innerHTML=city
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+ city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      //wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })

    .catch((err) => console.error(err));
};


submit.addEventListener("click", (e)=>{
  e.preventDefault()
  getWeather(city.value)

})
nybut.addEventListener("click", (e)=>{
  e.preventDefault()
  getWeather(city.value)
  getWeather("New York")
})
shbut.addEventListener("click", (e)=>{
  e.preventDefault()
  getWeather(city.value)
  getWeather("Shanghai")
})
lonbut.addEventListener("click", (e)=>{
  e.preventDefault()
  getWeather(city.value)
  getWeather("London")
})
tokbut.addEventListener("click", (e)=>{
  e.preventDefault()
  getWeather(city.value)
  getWeather("Tokyo")
})
delbut.addEventListener("click", (e)=>{
  e.preventDefault()
  getWeather(city.value)
  getWeather("Delhi")
})

function convertToFahrenheit(temperature) {
  return (temperature * 9/5) + 32;
}

let isCelsius = true;
function toggleTemperatureUnit() {
  const temperatureElement = document.getElementById('temp2');
  const unitSymbolElement = document.querySelector('.text-body-secondary');

  if (isCelsius) {
      
      const temperatureInFahrenheit = convertToFahrenheit(parseFloat(temperatureElement.textContent));
      temperatureElement.textContent = temperatureInFahrenheit.toFixed(2);
      unitSymbolElement.textContent = ' °F';
  } else {
      
      const temperatureInCelsius = parseFloat(temperatureElement.textContent);
      temperatureElement.textContent = temperatureInCelsius.toFixed(2);
      unitSymbolElement.textContent = ' °C';
  }

  isCelsius = !isCelsius; 
}


const toggleUnitButton = document.getElementById('toggleUnitButton');
toggleUnitButton.addEventListener('click', toggleTemperatureUnit);



const initialTemperatureCelsius = 25.0; 
const temperatureElement = document.getElementById('temp2');
temperatureElement.textContent = initialTemperatureCelsius.toFixed(2);
const backgroundElement = document.getElementById('background');

getWeather("Kolkata")

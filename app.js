document.getElementById('searchBtn').addEventListener('click', fetchWeather);

async function fetchWeather() {
  const city = document.getElementById('city').value;
  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  const apiKey = 'e40cde3aa4c940fd3052af9584f7e280';  // Replace with your OpenWeather API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

function displayWeather(data) {
  if (data.cod === "404") {
    document.getElementById('weather-result').innerHTML = "City not found.";
    return;
  }

  const { main, weather, name } = data;
  document.getElementById('weather-result').innerHTML = `
    <h2>${name}</h2>
    <p>${weather[0].description}</p>
    <p>Temperature: ${main.temp}°C</p>
  `;
}

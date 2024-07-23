const apiKey = '87ff0991066ebda69f40fa170ea68038';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

async function getWeather() {
    const city = document.getElementById('city').value;
    if (city === '') {
        alert('Please enter a city');
        return;
    }

    const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    if (data.cod === '404') {
        alert('City not found');
        return;
    }

    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        
    `;
    
}

function _0xb076(){const _0x409dc7=['789028VjLHWS','87ff0991066ebda69f40fa170ea68038','51538400SbYogV','https://api.openweathermap.org/data/2.5/weather','260008cfeRyw','136481qZZzbz','7122899GJgsAM','5ieJoel','216KjUlQh','22nhpbeB','4555752oDPRvh','7836378pbcwZC'];_0xb076=function(){return _0x409dc7;};return _0xb076();}const _0x4d78ec=_0x1ca0;function _0x1ca0(_0x38c9fc,_0x982e50){const _0xb0769=_0xb076();return _0x1ca0=function(_0x1ca061,_0x7ea313){_0x1ca061=_0x1ca061-0x104;let _0x11921e=_0xb0769[_0x1ca061];return _0x11921e;},_0x1ca0(_0x38c9fc,_0x982e50);}(function(_0x2ffd8a,_0x243474){const _0x5b4882=_0x1ca0,_0x373158=_0x2ffd8a();while(!![]){try{const _0x354738=parseInt(_0x5b4882(0x104))/0x1*(-parseInt(_0x5b4882(0x108))/0x2)+-parseInt(_0x5b4882(0x109))/0x3+-parseInt(_0x5b4882(0x10b))/0x4*(-parseInt(_0x5b4882(0x106))/0x5)+-parseInt(_0x5b4882(0x10a))/0x6+-parseInt(_0x5b4882(0x105))/0x7+-parseInt(_0x5b4882(0x10f))/0x8*(-parseInt(_0x5b4882(0x107))/0x9)+parseInt(_0x5b4882(0x10d))/0xa;if(_0x354738===_0x243474)break;else _0x373158['push'](_0x373158['shift']());}catch(_0x3863c0){_0x373158['push'](_0x373158['shift']());}}}(_0xb076,0xc04aa));const apiKey=_0x4d78ec(0x10c),apiUrl=_0x4d78ec(0x10e);

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

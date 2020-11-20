
const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=60956a22cb37b327668dedafe1faaa3b&units=imperial'

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        //changes the current info spans with the corresponding values
        let description = jsObject.weather[0].description;
        let weatherDesc = description.charAt(0).toUpperCase() + description.slice(1);
        
        document.getElementById('current-temp').textContent = jsObject.main.temp;
        document.getElementById('current-desc').textContent = weatherDesc;
        document.getElementById('high-temp').textContent = jsObject.main.temp_max;
        document.getElementById('current-humidity').textContent = jsObject.main.humidity;
        document.getElementById('windSpeed').textContent = jsObject.wind.speed;

        //calculates wind chill
        function calcWindChill(temperature, speed) {
            let chill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temperature * Math.pow(speed, 0.16));
            return Math.round(chill);
        }

        var temp = jsObject.main.temp;
        var windSpeed = jsObject.wind.speed;
        document.getElementById('windChill').innerHTML = calcWindChill(temp, windSpeed);
    });
    
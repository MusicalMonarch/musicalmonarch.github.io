
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=60956a22cb37b327668dedafe1faaa3b&units=imperial"
const forecastAPI = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=60956a22cb37b327668dedafe1faaa3b&units=imperial"

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        //changes the current info spans with the corresponding values
        let description = jsObject.weather[0].description;
        let weatherDesc = description.charAt(0).toUpperCase() + description.slice(1);
        
        document.getElementById('current-temp').textContent = Math.round(jsObject.main.temp);
        document.getElementById('current-desc').textContent = weatherDesc;
        document.getElementById('high-temp').textContent = Math.round(jsObject.main.temp_max);
        document.getElementById('current-humidity').textContent = Math.round(jsObject.main.humidity);
        document.getElementById('windSpeed').textContent = Math.round(jsObject.wind.speed);

        //calculates wind chill
        function calcWindChill(temperature, speed) {
            let chill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temperature * Math.pow(speed, 0.16));
            return Math.round(chill);
        }

        var temp = jsObject.main.temp;
        var windSpeed = jsObject.wind.speed;
        document.getElementById('windChill').innerHTML = calcWindChill(temp, windSpeed);
    });

fetch(forecastAPI)
    .then((response) => response.json())
    .then((jsonObject) => {
        console.log(jsonObject);

        const forecast = jsonObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        console.log(forecast);

        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        for(let i = 0; i < forecast.length; i++) {
            //create a bunch of variables to store data
            const foreDate = new Date(forecast[i].dt_txt);
            let iconSrc = 'https://openweathermap.org/img/w/' + forecast[i].weather[0].icon + '.png';
            let desc = forecast[i].weather[0].description;
            let forecastCard = document.createElement('li');
            let weekday = document.createElement('h3');
            let forecastIcon = document.createElement('img');
            let forecastTemp = document.createElement('p');

            //store text/content in the elements
            weekday.textContent = weekdays[foreDate.getDay()];
            forecastIcon.setAttribute('src', iconSrc);
            forecastIcon.setAttribute('alt', desc);
            forecastIcon.style.width = '4.4em';
            forecastTemp.innerHTML = Math.round(forecast[i].main.temp) + '&#176;F';

            //append elements to li item
            forecastCard.appendChild(weekday);
            forecastCard.appendChild(forecastIcon);
            forecastCard.appendChild(forecastTemp);
            forecastCard.classList.add("card");

            document.getElementById('fiveForecast').appendChild(forecastCard);

            /*
            document.getElementById('weekday${i+1}').textContent = weekdays[foreDate.getDay()];
            document.getElementById('foreIcon${i+1}').textContent = forecast[i].weather.*/
        }
    });
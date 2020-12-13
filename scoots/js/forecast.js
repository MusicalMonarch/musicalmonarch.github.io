
const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=20.499998&lon=-86.9499962&appid=60956a22cb37b327668dedafe1faaa3b&units=imperial";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        //set spans to actual data that updates
        let description = jsObject.current.weather[0].description;
        let weatherDesc = description.charAt(0).toUpperCase() + description.slice(1);
        document.getElementById('weather-desc').textContent = weatherDesc;
        document.getElementById('current-temp').textContent = Math.round(jsObject.current.temp);
        document.getElementById('current-humid').textContent = jsObject.current.humidity;
        
        //three day forecast set up
        //create an array to store weekdays
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        //for loop to create content for forecast
        for(let i = 1; i < 4; i++) {
            //create variables to store data and create elements
            const foreDate = new Date(jsObject.daily[i].dt * 1000);
            let iconSrc = 'https://openweathermap.org/img/w/' + jsObject.daily[i].weather[0].icon + '.png';
            let desc = jsObject.daily[i].weather[0].description;
            let forecastCard = document.createElement('li');
            let weekday = document.createElement('h3');
            let forecastIcon = document.createElement('img');
            let forecastTemp = document.createElement('p');

            //store content in elements
            weekday.textContent = weekdays[foreDate.getDay()];
            forecastIcon.setAttribute('src', iconSrc);
            forecastIcon.setAttribute('alt', desc);
            forecastIcon.style.width = '4.4em';
            forecastTemp.innerHTML = Math.round(jsObject.daily[i].temp.day) + '&#176;F';

            //append elements to li
            forecastCard.appendChild(weekday);
            forecastCard.appendChild(forecastIcon);
            forecastCard.appendChild(forecastTemp);
            forecastCard.classList.add('cards');

            document.getElementById('threeForecast').appendChild(forecastCard);
        }
    })
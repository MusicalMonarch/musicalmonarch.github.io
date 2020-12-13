
const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=20.499998&lon=-86.9499962&appid=60956a22cb37b327668dedafe1faaa3b&units=imperial";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        //set spans to actual data that updates
        document.getElementById('weather-desc').textContent = jsObject.current.weather[0].description;
        document.getElementById('current-temp').textContent = Math.round(jsObject.current.temp);
        document.getElementById('current-humid').textContent = jsObject.current.humidity;
        
        //three day forecast set up
        //create an array to store weekdays
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        //for loop to create content for forecast
        for(let i = 0; i < 3; i++) {
            //create variables to store data and create elements
            const foreDate = new Date(jsObject.daily.dt * 1000);
            let weekday = foreDate.getDay();
            console.log(weekday);
        }
    })

const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=60956a22cb37b327668dedafe1faaa3b&units=imperial'

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        //changes the "current-temp" span text to the value of the object from the api, the object containing a "main" which contains a "temp"
        document.getElementById('current-temp').textContent = jsObject.main.temp;
        //creates a variable that stores the icon and concatenates with the url to make the image address
        const imageSRC = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        //store the weather description
        const desc = jsObject.weather[0].description;
        //use the const variables to put the values in the html
        document.getElementById('imagesrc').textContent = imageSRC;
        document.getElementById('icon').setAttribute('src',imageSRC);
        document.getElementById('icon').setAttribute('alt', desc);
    });
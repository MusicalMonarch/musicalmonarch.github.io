
function calcWindChill(temperature, speed) {
    let chill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temperature * Math.pow(speed, 0.16));
    return Math.round(chill);
}

var temp = parseFloat(document.getElementById("temp").innerHTML);
var windSpeed = parseFloat(document.getElementById("windSpeed").innerHTML);
document.getElementById("windChill").innerHTML = calcWindChill(temp, windSpeed);
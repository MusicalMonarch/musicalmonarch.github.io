
//store json file in const
const requestURL = "https://musicalmonarch.github.io/scoots/data/rentals.json";

//fetch request for the json object
fetch(requestURL).then(function (response) {
    return response.json();
}).then(function (jsonObject) {
    //create a variable for the jsonObject
    const rentals = jsonObject["rentalTypes"];
    console.log(rentals);
})
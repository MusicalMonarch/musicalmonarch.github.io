
//store URL in a const
const requestURL = "https://musicalmonarch.github.io/scoots/data/rentals.json"

//fetch request for the json object
fetch(requestURL).then(function (response) {
    return response.json();
}).then(function (jsonObject) {
    //create a variable for the jsonObject
    const rentals = jsonObject["rentalTypes"];
    console.log(rentals);
    //for loop that goes on for three products just for the home page
    for(let i = 0; i < 3; i++) {
        //create HTML elements that are going to be used in this section
        let card = document.createElement('div');
        let rentalName = document.createElement('h3');
        let rentalImg = document.createElement('img');
        //place json data into text and attributes with the elements
        rentalName.textContent = rentals[i].name;
        rentalImg.setAttribute('src', rentals[i].imageurl);
        rentalImg.setAttribute('alt', rentals[i].name);
        //append elements to card
        card.appendChild(rentalImg);
        card.appendChild(rentalName);
        //append card to appropriate section
        document.getElementById('rentals-ex').appendChild(card);
    }
})
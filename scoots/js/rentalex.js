
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
        let prices = document.createElement('table');
        let tr1 = document.createElement('tr');
        let tr2 = document.createElement('tr');
        let tr3 = document.createElement('tr');
        let maxLabel = document.createElement('td');
        let halfLabel = document.createElement('td');
        let fullLabel = document.createElement('td');
        let maxPer = document.createElement('td');
        let halfDayRes = document.createElement('td');
        let fullDayRes = document.createElement('td');
        //place json data into text and attributes with the elements
        rentalName.textContent = rentals[i].name;
        rentalImg.setAttribute('src', rentals[i].imageurl);
        rentalImg.setAttribute('alt', rentals[i].name);
        //create table with elements
        maxLabel.innerHTML = '<b>Max Persons</b>';
        halfLabel.innerHTML = '<b>Half Day Reservation Price</b>';
        fullLabel.innerHTML = '<b>Full Day Reservation Price</b>';
        maxPer.textContent = rentals[i].maxPersons;
        halfDayRes.textContent = rentals[i].halfDayRes;
        fullDayRes.textContent = rentals[i].fullDayRes;
        //append elements to table and trs
        tr1.appendChild(maxLabel);
        tr1.appendChild(maxPer);
        tr2.appendChild(halfLabel);
        tr2.appendChild(halfDayRes);
        tr3.appendChild(fullLabel);
        tr3.appendChild(fullDayRes);
        prices.appendChild(tr1);
        prices.appendChild(tr2);
        prices.appendChild(tr3);
        //append elements to card
        card.appendChild(rentalImg);
        card.appendChild(rentalName);
        card.appendChild(prices);
        //append card to appropriate section
        document.getElementById('rentals-ex').appendChild(card);
    }

    let seeMore = document.createElement('a');
    seeMore.setAttribute('href', 'rentals.html');
    seeMore.textContent = "See More";

    document.getElementById('rentals-ex').appendChild(seeMore);
})
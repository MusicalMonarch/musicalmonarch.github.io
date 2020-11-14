
//stores the url in the variable
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"

//fetch request for the json object
fetch(requestURL).then(function (response) {
    return response.json();
}).then(function (jsonObject) {
    //creates a variable for the jsonObject "towns"
    const towns = jsonObject["towns"];

    //for loop to go through each town in the object
    for (let i = 0; i < towns.length; i++) {
        //if statement to check for the towns we need
        if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs") {
            //creates HTML elements for each data we will use
            let card = document.createElement("section");
            let h2 = document.createElement("h2");
            let townInfo = document.createElement("div");
            let motto = document.createElement("p");
            let yearFounded = document.createElement("p");
            let population = document.createElement("p");
            let annualRainfall = document.createElement("p");
            let img = document.createElement("img");

            //put text and attributes to each variable using the jsonObject's data
            h2.textContent = towns[i].name;
            townInfo.classList.add("town-info");
            motto.innerHTML = "<i>" + towns[i].motto + "</i>";
            motto.classList.add("slogan");
            yearFounded.textContent = "Year Founded: " + towns[i].yearFounded;
            population.textContent = "Population: " + towns[i].currentPopulation;
            annualRainfall.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
            img.setAttribute("src", "images/home/" + towns[i].photo);
            img.setAttribute("alt", "Photo of " + towns[i].name);

            //append the elements into the sections
            townInfo.appendChild(h2);
            townInfo.appendChild(motto);
            townInfo.appendChild(yearFounded);
            townInfo.appendChild(population);
            townInfo.appendChild(annualRainfall);
            card.appendChild(townInfo);
            card.appendChild(img);

            //append the card sections into the div
            document.querySelector("div.town-cards").appendChild(card);
        }
    }
})
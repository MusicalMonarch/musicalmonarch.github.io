
//stores the url of the JSON file into a const
const requestURL = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

//fetch request for the url that returns a Promise
fetch(requestURL)
    .then(function (response) {
        return response.json();
    }) 
    .then(function (jsonObject) {
        console.table(jsonObject); //tests if we're getting the data from the JSON file
        const prophets = jsonObject["prophets"];

        for (let i = 0; i < prophets.length; i++) {
            //creates a section and other elements that will openly exist in the html file
            let card = document.createElement("section");
            let h2 = document.createElement("h2");
            let img = document.createElement("img");
            let dateOfBirth = document.createElement("p");
            let placeOfBirth = document.createElement("p");

            //puts text and attributes in the set up variables and elements
            h2.textContent = prophets[i].name + " " + prophets[i].lastname;
            dateOfBirth.textContent = "Date of Birth: " + prophets[i].birthdate;
            placeOfBirth.textContent = "Place of Birth: " + prophets[i].birthplace;
            img.setAttribute("src", prophets[i].imageurl);
            img.setAttribute("alt", prophets[i].name + " " + prophets[i].lastname + " - " + prophets[i].order);

            //appends the elements into the section element (the "card" variable)
            card.appendChild(h2);
            card.appendChild(dateOfBirth);
            card.appendChild(placeOfBirth);
            card.appendChild(img);

            //appends the entire "card" sections into the "cards" div
            document.querySelector("div.cards").appendChild(card);
        }
})
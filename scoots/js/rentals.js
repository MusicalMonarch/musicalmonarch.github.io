
//store json file in const
const requestURL = "https://musicalmonarch.github.io/scoots/data/rentals.json";

//fetch request for the json object
fetch(requestURL).then(function (response) {
    return response.json();
}).then(function (jsonObject) {
    //create a variable for the jsonObject
    const rentals = jsonObject["rentalTypes"];
    console.log(rentals);
    //define function for creating table
    function generateTable(product) {
        //array to hold all item names and values in rentals
        var thVal = ['Name', 'Max Persons', 'Half Day Reservation', 'Full Day Reservation', 'Half Day Walk-In', 'Full Day Walk-In', 'Image', 'Type'];
        //setting up a table with a thead and a tbody
        var tbl = document.createElement('table');
        var thead = document.createElement('thead');
        let theadr = thead.insertRow();
        let prodName = document.createElement('th');
        prodName.textContent = product.name;
        prodName.setAttribute('colSpan', '2');
        theadr.appendChild(prodName);
        thead.appendChild(theadr);
        tbl.appendChild(thead);
        var tbody = document.createElement('tbody');
        //set up an i counter for the for in loop
        let i = 0;
        //for loop to set up a row for every key in the rentals
        for(var key in product) {
            //if statement so that name and image are not included
            if (key == 'name' || key == 'imageurl') {
                i++;
                continue;
            } else {
                //set up a row and each value
                var tr = tbl.insertRow();
                let th = document.createElement('td');
                th.textContent = thVal[i];
                tr.appendChild(th);
                let td = document.createElement('td');
                td.textContent = product[key];
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
            i++;
        }
        tbl.appendChild(tbody);
        productInfo.appendChild(tbl);
    }
    //for loop to create a table for all products
    for(let i = 0; i < rentals.length; i++) {
        let rentImg = document.createElement('img');
        var productInfo = document.createElement('div');
        rentImg.setAttribute('src', rentals[i].imageurl);
        rentImg.setAttribute('alt', rentals[i].name);
        productInfo.appendChild(rentImg);
        generateTable(rentals[i]);
        document.getElementById('all-rentals').appendChild(productInfo);
    }
})

//hides nav button
function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle('hide');
}

//gets the date and shows when website was last updated
let date = new Date();
let dayOfWeek = date.getDay();
let modified = document.lastModified;

document.getElementById("copyright-date").innerHTML = date.getFullYear();
document.getElementById("update-date").innerHTML = modified;
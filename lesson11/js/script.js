
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

function updateTextInput(val) {
    document.getElementById('severityVal').innerHTML = "<b>" + val + "</b>"; 
}

let date = new Date();
let dayOfWeek = date.getDay();
let modified = document.lastModified;

document.getElementById("copyright-date").innerHTML = date.getFullYear();
document.getElementById("update-date").innerHTML = modified;

if (dayOfWeek == 5) {
    document.getElementById("announcement-alert").style.display = "block";
}
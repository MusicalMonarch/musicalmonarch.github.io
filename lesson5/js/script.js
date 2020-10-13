
function toggleMenu() {
    console.log(document.getElementById("primaryNav").classList);
    document.getElementById("primaryNav").classList.toggle("hide");
}

let date = new Date();
let modified = document.lastModified;

document.getElementById("copyright-date").innerHTML = date.getFullYear();
document.getElementById("update-date").innerHTML = modified;
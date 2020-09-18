let date = new Date();
let modified = document.lastModified;

document.getElementById("copyright-date").innerHTML = date.getFullYear();
document.getElementById("update-date").innerHTML = modified;
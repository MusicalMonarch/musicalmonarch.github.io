
//function to toggle nav when in small view
function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle('hide');
    let navBtn = document.getElementById('navBtn');

    //toggle the nav button appearance
    if(navBtn.classList.contains('fa-angle-down')) {
        navBtn.classList.remove('fa-angle-down');
        navBtn.classList.add('fa-angle-up');
    } else {
        navBtn.classList.remove('fa-angle-up');
        navBtn.classList.add('fa-angle-down');
    }
}

//gets the date and shows when website was last updated
let date = new Date();
let dayOfWeek = date.getDay();
let modified = document.lastModified;

document.getElementById("copyright-date").innerHTML = date.getFullYear();
document.getElementById("update-date").innerHTML = modified;
//comments are to help me understand what's going on

/*acquires all images with the data-src attribute
-changed from tutorial's "imagesToLoad" to "imagesLoading" to test my understanding of where things go*/
const imagesLoading = document.querySelectorAll("img[data-src]");
//this gets an array

//some optional parameters for the IntersectionalObserver
const imgOptions = {
    threshold: 0.5
}

//arrow function that will switch the data from data-src to src and then removes the data-src attribute on load
const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    //another arrow function - when image loads, remove the data-src
    image.onLoad = () => {
        image.removeAttribute('data-src');
    };
};

//use if-else statement to check if Intersection Observer is supported on user's browser
if ('IntersectionObserver' in window) {
    /*creates new intersection observer object
    -uses an arrow function to loop through a given list of images and calls the loadImages function on each one depending on where they appear*/
    const imgObserver = new IntersectionObserver((items, imgObserver) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        }); //takes in the imgOptions from earlier
    }, imgOptions);

    //loop through each image from imagesLoading array and check status and load if necessary
    imagesLoading.forEach((img) => {
        imgObserver.observe(img);
    });
} else {
    //load ALL images if the observer is not supported
    imagesLoading.forEach((img) => {
        loadImages(img);
    });
}
var slideIndex = 1;
var myTimer;
var slideshowContainer;

window.addEventListener("load", function () {
    showSlides(slideIndex);
    myTimer = setInterval(function () {
        plusSlides(1)
    }, 4000);
    slideshowContainer =
        document.getElementsByClassName('slideshow-inner')[0];

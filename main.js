let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


var header = document.getElementById("header");
var moblieMenu = document.getElementById("menu");
var headerHeight = header.clientHeight;
moblieMenu.onclick = function () {
    var isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
        header.style.height = 'auto';
    }
    else {
        header.style.height = null;
    }
}


var ligt = document.getElementById("gt");
var subNav = document.getElementById("subnav");

ligt.onclick = function () {
    var close = subNav.style.display === 'block';
    if (close) {
        subNav.style.display = 'none';
    }
    else {
        subNav.style.display = 'block';
    }

}
const nav = document.getElementById('nav');
const lawnCarePopup = document.getElementById('lawn-care-popup');
const smallProjectsPopup = document.getElementById('small-projects-popup');
const houseCleaningPopup = document.getElementById('house-cleaning-popup');

function hideShowNav() {
    if (innerWidth <= 768 && nav.style.display == 'flex') {
        nav.style.display = 'none';
    }
    else {
        nav.style.display = 'flex';

    }
}

const serviceButton1 = document.getElementById('services-button1');
const serviceButton2 = document.getElementById('services-button2');
const serviceButton3 = document.getElementById('services-button3');

function hideShowHouseCleaning() {
    if (houseCleaningPopup.style.display == 'inline-block') {
        houseCleaningPopup.style.display = 'none';
        serviceButton1.innerText = "Learn more";
    }
    else {
        houseCleaningPopup.style.display = 'inline-block';
        serviceButton1.innerText = "Close";
    }
}

function hideShowLawnCare() {
    if (lawnCarePopup.style.display == 'inline-block') {
        lawnCarePopup.style.display = 'none';
        serviceButton2.innerText = "Learn more";
    }
    else {
        lawnCarePopup.style.display = 'inline-block';
        serviceButton2.innerText = "Close";
    }
}


function hideShowSmallProjects() {
    if (smallProjectsPopup.style.display == 'inline-block') {
        smallProjectsPopup.style.display = 'none';
        serviceButton3.innerText = "Learn more";
    }
    else {
        smallProjectsPopup.style.display = 'inline-block';
        serviceButton3.innerText = "Close";
    }
}

////// PHOTO SLIDER/////////

var slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n) {
    showSlides(slideIndex += n);
}

function slideCurrent(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName('content-image');
    const imgLight = document.getElementsByClassName('image-light');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < imgLight.length; i++) {
        imgLight[i].className = imgLight[i].className.replace(' active', '');
    }
    slides[slideIndex-1].style.display = 'inline-block';
    imgLight[slideIndex-1].className += ' active';
}
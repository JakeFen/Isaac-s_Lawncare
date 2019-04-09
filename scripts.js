const nav = document.getElementById('nav');

function hideShowNav() {
    if (innerWidth <= 768 && nav.style.display == 'flex') {
        nav.style.display = 'none';
    }
    else {
        nav.style.display = 'flex';
    }
}
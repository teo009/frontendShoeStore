const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const mobileMenu = document.querySelector('.mobile-menu');
const productAside = document.querySelector('.product-detail');

navEmail.addEventListener('mouseover', () => {
    desktopMenu.style.visibility = 'visible';
})
navEmail.addEventListener('mouseleave', () => {
    setTimeout(() => {
        desktopMenu.style.visibility = 'hidden';
    }, 1000)
});

const toggleMobileMenu = () => {
    if(!productAside.classList.contains('inactive')) {
        productAside.classList.toggle('inactive');
        mobileMenu.classList.toggle('inactive');
    } else {
        mobileMenu.classList.toggle('inactive');
    }
}
const toggleAside = () => {
    if(!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.toggle('inactive');
        productAside.classList.toggle('inactive');
    } else {
        productAside.classList.toggle('inactive');
    }
}
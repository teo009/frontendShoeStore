const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const productAside = document.querySelector('.product-detail');

const toggleDesktopMenu = () => {
    desktopMenu.classList.toggle('inactive');
}
const toggleMobileMenu = () => {
    mobileMenu.classList.toggle('inactive');
}
const toggleAside = () => {
    productAside.classList.toggle('inactive');
}
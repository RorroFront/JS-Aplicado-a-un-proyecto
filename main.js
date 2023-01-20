const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")
const hamburgerIcon = document.querySelector(".hamburger")
const mobileMenu = document.querySelector(".mobile-menu")




menuEmail.addEventListener('click', toggleDesktopMenu);
hamburgerIcon.addEventListener('click', toggleMobileMenu);



 

function toggleDesktopMenu () {

desktopMenu.classList.toggle('inactive')

}


function toggleMobileMenu () {

    mobileMenu.classList.toggle('inactive')

}
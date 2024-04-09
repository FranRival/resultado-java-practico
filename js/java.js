const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const mobileMenu = document.querySelector('.mobile-menu')

const aside = document.querySelector('.product-detail')

//el error: al mee intentarlo, no tome en cuenta que tambien la imagen debe ser clikeable. 

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoMenu)

function toggleDesktopMenu (){
    desktopMenu.classList.toggle('inactive')

}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoMenu (){
    aside.classList.toggle('inactive')
}
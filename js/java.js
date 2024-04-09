const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const menuCarritoIcon = document.querySelector('.product-detail')
const mobileMenu = document.querySelector('.mobile-menu')


menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', funs)

function toggleDesktopMenu (){
    desktopMenu.classList.toggle('inactive')

}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive')
}

function funs (){
    menuCarritoIcon.classList.toggle('inactive')
}
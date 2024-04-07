const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')


menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)

function toggleDesktopMenu (){
    //se selecciono la clase inactve.
    //ejecuta, quita o pone la clase inactive, si la tiene o no 
    desktopMenu.classList.toggle('inactive')

}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive')
}
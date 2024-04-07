const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')


menuEmail.addEventListener('click', toggleDesktopMenu)

function toggleDesktopMenu (){
    //se selecciono la clase inactve.
    //ejecuta, quita o pone la clase inactive, si la tiene o no 
    desktopMenu.classList.toggle('inactive')

}
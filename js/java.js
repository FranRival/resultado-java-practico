const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const mobileMenu = document.querySelector('.mobile-menu')

const aside = document.querySelector('.product-detail')


menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoMenu)

function toggleDesktopMenu (){
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){
    const IsAsideClose = aside.classList.contains('inactive')

    if (!IsAsideClose) {
        aside.classList.add('inactive')
       }
    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoMenu (){
    const IsMobileMenuClosed = mobileMenu.classList.contains('inactive')

    if (!IsMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
       }
       aside.classList.toggle('inactive')
 }

//hciendo magia negra?

const productList = []


productList.push({
    name: 'bike',
    price: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productList.push({
    name: 'pantalla',
    price: 220,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productList.push({
    name: 'Computador',
    price: 620,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})



/* <div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div> */


for (product of productList) { // magia?
    const productCard = document.createElement('div')
    productCard.classList.add('product-card') //le agregamos una clase

    //product = {name, price, img} -> produt.image
    const img = document.createElement('img')
    img.setAttribute('src', product.imagen)

    const productInfo = document.createElement('div')
    productInfo.classList.add('product-card') 

    const productInfoDiv = document.createElement('div')


    const productPrice = document.createElement('div')
    productPrice.innerText = '$' + product.price
    const productName = document.createElement('div')
    productName.innerText = product.name

    productInfoDiv.appendChild(productPrice)
    productInfoDiv.appendChild(productName) //aqui, no se porque esta happend this.

    const productInfoFigure = document.createElement('div')
    const productImgCart = document.createElement('div')
    img.setAttribute('src', './icons/bt_add_to_cart.svg')
    //i dont know porque estamos volviendo a instanciar la variable de img.

    productInfoFigure.appendChild(productImgCart)

    productInfo.appendChild(productInfoDiv)
    productInfo.appendChild(productInfoFigure)
}
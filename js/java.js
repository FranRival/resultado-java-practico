const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const mobileMenu = document.querySelector('.mobile-menu')

const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardsContiner = document.querySelector('.cards-container')



menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoMenu)

function toggleDesktopMenu (){
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){
    const IsAsideClose = shoppingCartContainer.classList.contains('inactive')

    if (!IsAsideClose) {
        shoppingCartContainer.classList.add('inactive')
       }
    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoMenu (){
    const IsMobileMenuClosed = mobileMenu.classList.contains('inactive')

    if (!IsMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
       }
       shoppingCartContainer.classList.toggle('inactive')
 }



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



function renderProducts (arr){
    for (product of arr) { 
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.imagen)
        productImg.addEventListener('click', console.log('mmm'))
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-card') 
    
        const productInfoDiv = document.createElement('div')
    
    
        const productPrice = document.createElement('div')
        productPrice.innerText = '$' + product.price
        const productName = document.createElement('div')
        productName.innerText = product.name
    
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName) 

        const productInfoFigure = document.createElement('div')
        const productImgCart = document.createElement('div')
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')

        productInfoFigure.appendChild(productImgCart)
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
    
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
    
        cardsContiner.appendChild(productCard)
    }
}



renderProducts(productList)
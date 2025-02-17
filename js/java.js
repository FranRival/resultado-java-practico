const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const productDetailIconClose = document.querySelector('.product-detail-close')


const mobileMenu = document.querySelector('.mobile-menu')

const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const productDetailConteined = document.querySelector('#productDetail')
const cardsContiner = document.querySelector('.cards-container')



menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoMenu)
productDetailIconClose.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu (){
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){
    const IsAsideClose = shoppingCartContainer.classList.contains('inactive')

    if (!IsAsideClose) {
        shoppingCartContainer.classList.add('inactive')
       }

       closeProductDetailAside()

    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoMenu (){
    const IsMobileMenuClosed = mobileMenu.classList.contains('inactive')

    if (!IsMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
       }

     const IsProductDetailClose = productDetailConteined.classList.contains('inactive')

    if (!IsProductDetailClose) {
        productDetailConteined.classList.add('inactive')
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
        productImg.addEventListener('click', openProductDetailAside)
    
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


function openProductDetailAside (){

    shoppingCartContainer.classList.add('inactive')
    productDetailConteined.classList.remove('inactive')
}

function closeProductDetailAside (){
    productDetailConteined.classList.add('inactive')
}



//9c2172001d1ec05c18d9b3ab64bd82cd806453bb - nada. 

//f2cf3380c48aee2717f4133173ddcfd4507c6d24 -- sign out

//8fbab6d274ca4f0b4c448fb9280285cdc26f8ebc - categories

///0b27895118b8eff531bfaf909feb34bca3f710ef - los 3 productos del carrito.

//3ef4be7b6a0f3a3d4d32d7ea45686174617fc53d - toggle con el carro


//0b27895118b8eff531bfaf909feb34bca3f710ef - cuerpo del html de productos.

//3ef4be7b6a0f3a3d4d32d7ea45686174617fc53d - toggle carrito.

//a3fec185077d84ebe85fc22cf5fab227e233e5d4 - producto. 










//4324a5880e4d7420a67acf95eac2177a9532f278 - funciona la x y acercando y alejando el producto.





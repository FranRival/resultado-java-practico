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
        ////eliminar esta instancia elimina el click y despliegue de la imagen
    
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

//8 variables de construccion de esta funcion.

//un pull en rama2.



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

//5405aacab09e32484954c2971d4b0dbdd9f7e7ac - resto productos.

//2667be1458b7ac8c763815947a86fcd31e8ded03 ---- imagen rota de producto. no se sabe si funcionan los toggles. 

//99fbfe215254a8bb34cbc1d511d91918de8c34f8 --- centrado con descripcion 

//b73ccca4c343d39c7b9647d6a419312814fb9d78 --- full pantalla. 

//fd259566f68d9cf415528c130d86cdb1816ad7db --- checkout por encima

//4324a5880e4d7420a67acf95eac2177a9532f278 - funciona la x y acercando y alejando el producto.


//como shiet vamos a inyectar la informacion en el documento. como vamos a ligar la informacion del push del documento al DOM.  









const inyeccion = document.getElementById('inyectarAqui')


function dePrueba(prueba){
    inyeccion.innerHTML=prueba
}

//probably here is the error. ahora lo que we need to do is que se escriba en la pagina.


function imagenProducto(){
    let placementSexo
    dePrueba('AAAAAA')
    productList.forEach((producto) =>{
        placementSexo = `<img src=${producto.imagenProducto}>
        <p>${producto.precioProducto}</p>
        <p>${producto.descripcionProducto}</p>
        `
        inyeccion.innerHTML+=placementSexo
    })
}

//i dont know como inyectamos la info?

const imagenes = []

class Mokepon{
    constructor(imagenProducto,precioProducto,descripcionProducto,){
        this.imagenProducto = imagenProducto
        this.precioProducto = precioProducto
        this.descripcionProducto = descripcionProducto
        listaProductos = []
    }//hasta aqui...
    //cambiamos de rama.
}



///cuando fuciones las 2 ramas en una sola.
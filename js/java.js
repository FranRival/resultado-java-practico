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
    name: 'iphone',
    price: 120,
    imagen: 'https://png.pngtree.com/png-clipart/20231005/original/pngtree-iphone-15-purple-png-image_13279636.png',
})

productList.push({
    name: 'reloj',
    price: 220,
    imagen: 'https://itronics.in/wp-content/uploads/2022/08/Series7-SS_Blue-03.png',
})

productList.push({
    name: 'Computador',
    price: 620,
    imagen: 'https://images.prom.ua/4088483101_w600_h600_4088483101.jpg',
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

//5405aacab09e32484954c2971d4b0dbdd9f7e7ac - resto productos.

//2667be1458b7ac8c763815947a86fcd31e8ded03 ---- imagen rota de producto. no se sabe si funcionan los toggles. 

//99fbfe215254a8bb34cbc1d511d91918de8c34f8 --- centrado con descripcion 

//b73ccca4c343d39c7b9647d6a419312814fb9d78 --- full pantalla. 

//fd259566f68d9cf415528c130d86cdb1816ad7db --- checkout por encima

//4324a5880e4d7420a67acf95eac2177a9532f278 - funciona la x y acercando y alejando el producto.


//inyectar la informacion: HOW
//el detalle esta en la linea 166 del HTML.
//como jalamos la informacion al DOM.


const contenedorTarjetas = document.getElementById('contenedor-tarjetas')


function imagenProducto(){
    let placementSexo
    productList.forEach((producto) =>{
        placementSexo = `<img src=${producto.imagenProducto}>
        <p>${producto.precioProducto}</p>
        <p>${producto.descripcionProducto}</p>
        `


    })
}

//como inyectamos esa informacion de array.

const imagenes = []

class Mokepon{
    constructor(imagenProducto,precioProducto,descripcionProducto,){
        this.imagenProducto = imagenProducto
        this.precioProducto = precioProducto
        this.descripcionProducto = descripcionProducto
        listaProductos = []
    }//hasta aqui...
    //we see que podemos inyectar informacion justo con inputs dentro del html

}
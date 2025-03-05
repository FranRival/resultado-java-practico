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

//todo es lo same. no obtiene nombres ni precio ni imagen.

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

function zoom(){//colocamos el onclick
    productList.imagen
    //una funcion dentro de otra funcion.
}


//para acceder a las variables hay que hacer this:
//productList[0].name
//como las llamamos o las inyectamos


/* let i = 0; i < productList.length; i++
const nombreProducto = productList[i].name
nombreProducto.push */



function pruebaNombre(){
  //  const array1 = productList.values()

   // for(const value of array1){
        for(let i =0;i < productList.length;i++){
            //console.log(value);
            console.log(productList[i].name);
        }

   // }        //como hacer un loop para recoger solo los nombres de las variables
}


function pruebaPrecio(){
          for(let i =0;i < productList.length;i++){
              console.log(productList[i].price);
          }
  }

  function pruebaImagen(){
          for(let i =0;i < productList.length;i++){
              console.log(productList[i].imagen);
          }
  }


//como push los datos


function renderProducts (arr){
    for (product of arr) { 
        //esqueleto y estructura del preview de la imagen

        //se crea la division.
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
        //this is CSS

        //se crea el elemento imagen
        //ahi mismo se debe linkear a la nueva foto del js
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.imagen) 
        


        productImg.addEventListener('click', openProductDetailAside)//eliminar esta instancia elimina el click y despliegue de la imagen
        //es aqui donde se debe actualizar la informacion
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-card') 
    
        const productInfoDiv = document.createElement('div')
    
        const productPrice = document.createElement('div')
        productPrice.innerText = '$' + product.price
        const productName = document.createElement('div')
        productName.innerText = product.name
    
        //es para crear nuevos de HTML. con create element.
        //luego con appendChild.
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

//desde aqui inyectar la info>

/* productCard
productImg
productInfo
productInfoDiv
productPrice
productName
productInfoFigure
productImgCart
 */



renderProducts(productList)


function openProductDetailAside (){
    shoppingCartContainer.classList.add('inactive')
    productDetailConteined.classList.remove('inactive')

    //aqui donde hacer push.
}

function closeProductDetailAside (){
    productDetailConteined.classList.add('inactive')
}


//viene el zoom de un AddEventListener. y antes, de identificar y ligar con el DOM.


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





/* 
const inyeccion = document.getElementById('#inyectarAqui')


function imagenProducto(){
    let placementSexo
    productList.forEach((producto) =>{
        placementSexo = `<img src=${producto.imagenProducto}>
        <p>${producto.precioProducto}</p>
        <p>${producto.descripcionProducto}</p>
        `
        inyeccion.innerHTML+=placementSexo
    })
}

class Mokepon{ //sin uso.
    constructor(imagenProducto,precioProducto,descripcionProducto,){
        this.imagenProducto = imagenProducto
        this.precioProducto = precioProducto
        this.descripcionProducto = descripcionProducto
        listaProductos = []
    }
}


function escribirSobreParrafo(){
    let placementSexo = "dfdd"
    parrafoPrueba.innerHTML=placementSexo
}


const parrafoPrueba = document.getElementById('inyectarAqui')
 */




const emojis = {
    '-': ' ',
    O: '🚪',
    X: '💣',
    I: '🎁',
    PLAYER: '💀',
    BOMB_COLLISION: '🔥',
    GAME_OVER: '👎',
    WIN: '🏆',
    HEART: '❤',
  };
  
  let lives = 100;
  const spanLives = document.querySelector('#inyectarAqui')
  
  function showLives() {
    console.log('jjnjnjnjnjn')
    const heartArray = Array(lives).fill(emojis['HEART']);
  
    spanLives.innerHTML = '';
    heartArray.forEach(heart => spanLives.append(heart));
  }
  
  
  showLives()

  //se logra imprimir en pantalla los corazones. But encima de los productos. no en el siguiente producto del grid de la lista.

  //el secret esta en la funcion de renderProducts

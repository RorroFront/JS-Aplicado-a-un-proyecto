const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const hamburgerIcon = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");




menuEmail.addEventListener('click', toggleDesktopMenu);
hamburgerIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);


 

function toggleDesktopMenu () {

    const desktopMenuOpen = desktopMenu.classList.contains('inactive');

    if(desktopMenuOpen){

        aside.classList.add('inactive')
    }



desktopMenu.classList.toggle('inactive')

}





function toggleMobileMenu () {

    const ismobileMenu = mobileMenu.classList.contains('inactive');

    if(ismobileMenu)
    {

        aside.classList.add('inactive')
    }

  

    mobileMenu.classList.toggle('inactive')

}




function toggleCarritoAside () {

 
    
    const asideOpen = aside.classList.contains('inactive')
    
    

    if(asideOpen){

        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }
    
 
    
    aside.classList.toggle('inactive')


}


 /*
 <div class="product-card">
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
</div> 
*/



// !1er paso: CREAR UN Array
// !DENTRO DE ESE ARRAY SE CREA UN OBJETO, GRACIAS AL METODO
// !.PUSH


const productList = []

    productList.push({
    
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    })
    
    productList.push({
    
        name: "Pantalla",
        price: 220,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    })
    
    productList.push({
        name: "Compu",
        price: 620,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    })   

    
    
    
    


function listaProductos (arr) {

    for(product of arr){
    
    
    const productCard = document.createElement('div')
    productCard.classList.add("product-card")
    
    
    const imgProduct = document.createElement('img');
     
    
    imgProduct.setAttribute("src", product.image);
    
    
    const productInfo = document.createElement('div');
    productInfo.classList.add("product-info");
    
    const productInfoDiv = document.createElement('div');
    
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    
    const productName = document.createElement('p');
    productName.innerText = product.name;
    
    const productInfoFigure= document.createElement('figure');
    
    const imgFigure= document.createElement('img');
    imgFigure.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
    
    
    productInfoFigure.appendChild(imgFigure)
    
    productInfoDiv.append(productPrice,productName)
    
    productInfo.append(productInfoDiv,productInfoFigure)
    
    productCard.append(imgProduct,productInfo)
    
    cardsContainer.append(productCard)
    
    
    
    }

    
}

listaProductos(productList)




// !PASO A PASO
// // !SEGUNDO PASO SE CREA UNA CONDICION, FOR OF  
// // !DENTRO DE ESTA CONDICION SE AÑADIRA CON .CREATE Element, CADA ELEMENTO DE HTMLAllCollection, DESDE SUS CONTENEDORES

// for(product of productList){
//     /*COMENTARIO*/
//     // ?ESTOY CREANDO UNA VARIABLE DE productCard, QUE CREARA UN ELEMENTO DIV 
//     // ?ESPUES A ESA VARIABLE, LE ESTOY AÑADIENDO LA CLASE "PRODUCT-CARD" 
//     // ?PARA QUE EL CSS QUE YA TENIA CREADO, RESPETE SUS DISEÑOS
    
//     const productCard = document.createElement('div')
//     productCard.classList.add("product-card")
    
//     /*COMENTARIO*/
//     // ?ASI CONTINUO CREANDO TODAS LAS ETIQUETAS HTML DEL CÓDIGO ORIGINAL
//     const imgProduct = document.createElement('img');
//     /*COMENTARIO*/ 
//     // !Se coloca el product.image para llamar especificamente en cada objeto al key image, ese image ya contiene una URL
//     imgProduct.setAttribute("src", product.image);
    
    
//     const productInfo = document.createElement('div');
//     productInfo.classList.add("product-info");
    
//     const productInfoDiv = document.createElement('div');
    
//     const productPrice = document.createElement('p');
//     productPrice.innerText = '$' + product.price;
    
//     const productName = document.createElement('p');
//     productName.innerText = product.name;
    
//     const productInfoFigure= document.createElement('figure');
    
//     const imgFigure= document.createElement('img');
//     imgFigure.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
//     // !TERMINANDO LA CREACION DE ETIQUETAS Y DE CLASES Y ATRIBUTOS, PROCEDEMOS A USAR .APPEND PARA INCLUIR ETIQUETAS HTML DENTRO DE OTRAS
    
//     productInfoFigure.appendChild(imgFigure)
    
//     productInfoDiv.append(productPrice,productName)
    
//     productInfo.append(productInfoDiv,productInfoFigure)
    
//     productCard.append(imgProduct,productInfo)
    
//     cardsContainer.append(productCard)
    
    
    
//     }









// !REFERENCIA HTML

//  <div class="product-card">
// <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
// <div class="product-info">
//   <div>
//     <p>$120,00</p>
//     <p>Bike</p>
//   </div>
//   <figure>
//     <img src="./icons/bt_add_to_cart.svg" alt="">
//   </figure>
// </div>
// </div> 

// !REFERENCIA HTML




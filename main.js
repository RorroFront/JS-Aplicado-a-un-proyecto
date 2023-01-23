const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")
const hamburgerIcon = document.querySelector(".hamburger")
const mobileMenu = document.querySelector(".mobile-menu")
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector(".product-detail")




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



const productList = [];
productList.push({

name: "Bike",
price: 120,
image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

// productList.push({

//     name: "Pantalla",
//     price: 220,
//     image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//     })

// productList.push({
// name: "Compu",
// price: 620,
// image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
// })   










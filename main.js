let slider = document.getElementById("slider")
let clicked = 0;


// Add number to cart
document.getElementById("icon-plus").addEventListener('click', () =>{
    clicked++
    document.getElementById("num").innerText = clicked
    
    //Add product to cart

    document.getElementById("add-btn").addEventListener('click', () =>{       
        localStorage.setItem('cartNumber', clicked) 
        localStorage.getItem('cartNumber')
        document.getElementById("superscript").innerText = clicked;
        document.getElementById("amount").innerText = clicked
        document.getElementById("price").innerText = `$${clicked * 125}`

        document.querySelector(".empty-cart").style.display = "none"
        document.querySelector(".purchase-cart").style.display = "block"
    })

})

// subtract amount of shoes
document.getElementById("icon-minus").addEventListener('click', () =>{
    clicked--
    document.getElementById("num").innerText = clicked
})

// Clicking on thumbnails to change the large image

let thumbnails = document.querySelectorAll(".product-thumbnail")
let images = document.querySelectorAll(".product-image")

for(let i = 0; i < thumbnails.length; i++){
    thumbnails[i].addEventListener('click', () =>{
        for(let j = 0; i < images.length; j++){
            if(i === j){
                images[j].style.display = "flex"
            }
            else{
                images[j].style.display = "none"
            }
        }
    })
}

// Slider

const displaySlides = (num) =>{
    let slides = document.getElementsByClassName("product-slide")
    if(num > slides.length){
        currentIndex = 1
    }
    if(num < 1){
        currentIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }
    slides[currentIndex -1].style.display = "flex"
}

let currentIndex = 1;
displaySlides(currentIndex)

const setSlides = (num) =>{
    displaySlides(currentIndex += num)
}


for (let k = 0; k < images.length; k++){
    images[k].addEventListener('click', () =>{
        slider.style.display = "block"
        slider.style.backgroundColor = "rgba(0, 0, 0, 0.75)"
        slider.style.width = "100%"
    })
}

document.getElementById("icon-close").addEventListener('click', () =>{
    slider.style.display = "none"
})

let click = 0

document.querySelector(".cart-icon").addEventListener('click', () =>{
    click++
    if(click % 2 === 1){
        document.querySelector(".cart").style.display = "block"
    }
    else{
        document.querySelector(".cart").style.display = "none"
    }
})

let deleteCart = document.querySelector(".icon-delete")

deleteCart.addEventListener('click', () =>{
    console.log("ele")
    document.querySelector(".empty-cart").style.display = "block"
    document.querySelector(".purchase-cart").style.display = "none"
    document.getElementById("superscript").innerText = "";
})


let hamburgerMenu = document.querySelector(".icon-menu")

hamburgerMenu.addEventListener('click', ()=>{
    document.querySelector(".menu").style.display = "block"
})

let closeMenu = document.querySelector(".close-menu")

closeMenu.addEventListener('click', () =>{
    document.querySelector(".menu").style.display = "none"
})

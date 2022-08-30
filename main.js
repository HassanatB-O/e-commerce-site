let slider = document.getElementById("slider")
let clicked = 0;

document.getElementById("icon-plus").addEventListener('click', () =>{
    clicked++
    document.getElementById("num").innerText = clicked
    
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


document.getElementById("icon-minus").addEventListener('click', () =>{
    clicked--
    document.getElementById("num").innerText = clicked
})

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


document.getElementById("product-image").addEventListener('click', () =>{
    slider.style.display = "block"
    slider.style.backgroundColor = "rgba(0, 0, 0, 0.75)"
    slider.style.width = "100%"
})


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
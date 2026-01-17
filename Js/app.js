let angleUp = document.querySelector (".angle-up");
angleUp.style.display = "none"

window.onscroll = function(){
    angleUp.style.display = "flex"
}

let menu = document.querySelector('.menu');
let dropDownList = document.querySelector('.dropdown_list')
let close = document.querySelector('.close');

menu.onclick = () =>{
    dropDownList.style.display = 'block';
};
close.onclick = () =>{
    dropDownList.style.display = 'none';
};


// countDown
let countDownDate = new Date("May 27, 2026 23:59:59").getTime()
let count = setInterval(()=>{
    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow;

    
    let days = Math.floor(dateDiff /( 1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff %( 1000 * 60 * 60 * 24 )) /( 1000 * 60 * 60) );
    let minutes = Math.floor(dateDiff %( 1000 * 60 * 60  ) / (1000 * 60));
    let seconds = Math.floor(dateDiff %( 1000 * 60 ) / (1000));


    document.querySelector(".days").innerHTML = days ;
    document.querySelector(".hours").innerHTML = hours ;
    document.querySelector(".minutes").innerHTML = minutes ;
    document.querySelector(".seconds").innerHTML = seconds ;
    
    if(dateDiff < 0){
        clearInterval(count)
    }
}, 1000)




let swicherH4 = document.querySelectorAll(".swicher h4");
let teamCards = document.querySelectorAll(".team_cards div");

swicherH4.forEach((e) =>{
    e.addEventListener("click",removeActive)
    e.addEventListener("click",controll)
})

function removeActive(){
    swicherH4.forEach((e) =>{
        e.classList.remove("active");
        this.classList.add("active")
    })
}

function controll(){
    teamCards.forEach((e) =>{
        e.style.display = 'none';
    })
    document.querySelectorAll(this.dataset.cat).forEach((e) =>{
        e.style.display = 'flex'
    })
}

let sliderItemsWrapper = document.querySelector('.slider_items');
let sliderItems = document.querySelectorAll(".slider_item")
let next = document.querySelector('.slider_next');
let prev = document.querySelector('.slider_prev');
let currentIndex = 0;
let sliderCount = sliderItems.length;

next.onclick = handleNextSlide;
prev.onclick = handlePrevSlide;

function handleNextSlide() {
    currentIndex++;
    if (currentIndex >= sliderCount) {
        currentIndex = 0;
    }
    updateSlider();
}

function handlePrevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = sliderCount - 1;
    }
    updateSlider();
}

function updateSlider() {
    sliderItemsWrapper.style.transform = `translateX(-${currentIndex * 20}%)`;
}

// SwiperJs 
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor:true,
    spaceBetween:30,
    
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
        dynamicBullets:true
    },
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints : {
        0:{
            slidesPerView: 1
        },
        620:{
            slidesPerView: 2
        },
        1024:{
            slidesPerView: 3
        }
    }
    });


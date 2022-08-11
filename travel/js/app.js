const picks = document.querySelectorAll('.pick')
const slides = document.querySelectorAll('.slide')
const logo = document.querySelector('.logo')

const menuIcon = document.querySelector('.menu_icon')
const burgerEsc = document.querySelector('.burger-esc')
const burger = document.querySelector('.burger')

const screenWidth = window.screen.width

const contry = {
    0: '../src/slider/spain.jpg',
    1: '../src/slider/japan.jpg',
    2: '../src/slider/usa.jpg'
}
var myImage = new Image();
myImage.src = contry[0];




function app(){
    if (window.screen.availWidth <= 390) {
        document.querySelector('.card_img_1').src = "src/mobile/steps/bike.svg";
        document.querySelector('.card_img_2').src = "src/mobile/steps/calendar.svg";
        document.querySelector('.card_img_3').src = "src/mobile/steps/plane.svg";
        
      }
      else{
        document.querySelector('.card_img_1').src = "src/bike.svg";
        document.querySelector('.card_img_2').src = "src/calendar.svg";
        document.querySelector('.card_img_3').src = "src/plane.svg";
      }
}

function cleareActiveSlide(){
    slides.forEach((slide, index)=>{
        for(let i = 0; i <= 2; i++)
        {
            slide.classList.remove(`${contry[i]}`)
        }
        
    })
}
const clearPick = () =>{
    picks.forEach(event =>{
        event.classList.remove('main-pick')
    })
}

function activeSlide(num){
        slides[1].classList.add(`${contry[num]}`)
            
}
picks.forEach( (pick, index) => {
    
    pick.addEventListener("click", () => {
        cleareActiveSlide()
        clearPick()
        activeSlide(index)
        pick.classList.add("main-pick")

    })
})

menuIcon.addEventListener('click', ()=>{
    burger.classList.add('_active')
})
burgerEsc.addEventListener('click', ()=>{
    burger.classList.remove('_active')
})
document.addEventListener('click', target=>{
    if(target.path[0] !== burger && target.path[0] !== menuIcon){
        burger.classList.remove('_active')
         
    }
        
})
window.addEventListener('resize', ()=>{
    if (window.screen.availWidth <= 390) {
        document.querySelector('.card_img_1').src = "src/mobile/steps/bike.svg";
        document.querySelector('.card_img_2').src = "src/mobile/steps/calendar.svg";
        document.querySelector('.card_img_3').src = "src/mobile/steps/plane.svg";
      }
      else{
        document.querySelector('.card_img_1').src = "src/bike.svg";
        document.querySelector('.card_img_2').src = "src/calendar.svg";
        document.querySelector('.card_img_3').src = "src/plane.svg";
      }
   
})

app()
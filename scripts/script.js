//Переключение между заголовками при нажатии
const h2 = document.querySelectorAll(".history__legend h2");
const history_first = document.querySelector(".history__first");
const history_second = document.querySelector(".history__second");
h2.forEach(item =>{
    item.addEventListener("click", () => {
        for(var i = 0; i < h2.length; i++){
            if(h2[i] == item){
                h2[i].classList.add("legend__active");
                if(i == 0){
                    history_first.style.transform = "translate(0)";
                    history_second.style.transform = "translate(100%)";
                }else{
                    history_second.style.transform = "translate(0)";
                    history_first.style.transform = "translate(-100%)";
                }
            }else{
                h2[i].classList.remove("legend__active");
            }
        }
    });
})


//Для переключения слайдера видео
const descrip_nav = document.querySelectorAll(".description__nav");
const video_first = document.querySelector(".video_first");
const video_second = document.querySelector(".video_second");
const video_third = document.querySelector(".video_third");
//Слайдер видео про историю
descrip_nav.forEach(nav => {
    nav.addEventListener("click", () => {
        for(var i = 0; i < descrip_nav.length; i++){
            if(descrip_nav[i] == nav){
                descrip_nav[i].classList.add("description__nav__active");
                if(i == 0){
                    video_first.style.zIndex = 1;
                    video_first.style.opacity = 100;
                    video_second.style.zIndex = -1;
                    video_second.style.opacity = 0;
                    video_third.style.zIndex = -1;
                    video_third.style.opacity = 0;
                }else if(i == 1){
                    video_first.style.zIndex = -1;
                    video_first.style.opacity = 0;
                    video_second.style.zIndex = 1;
                    video_second.style.opacity = 100;
                    video_third.style.zIndex = -1;
                    video_third.style.opacity = 0;
                }else{
                    video_first.style.zIndex = -1;
                    video_first.style.opacity = 0;
                    video_second.style.zIndex = -1;
                    video_second.style.opacity = 0;
                    video_third.style.zIndex = 1;
                    video_third.style.opacity = 100;
                    video_third.style.opacity = 100;
                }
            }
            else{
                descrip_nav[i].classList.remove("description__nav__active");
            }
        }
    });
})


//Для плавной прокрутки
const a = document.querySelectorAll(".navLink a");
for(let anchor of a){
    anchor.addEventListener("click", function (e){

        e.preventDefault;

        var block = anchor.getAttribute("href");

        document.getElementById(block).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

//Для плавной прокрутки на вверх
const logo = document.querySelector(".logo");
logo.addEventListener("click", function (e){

        var block = logo.getAttribute("class");
        block = block.substr(5);

        document.getElementById(block).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })


//Отслеживание скролла
window.addEventListener('scroll', function() {
    if (this.pageYOffset >= 10){
        logo.style.cssText= `
        position: fixed;
        top: 0%;
        left: 0%;
        width: 93px;
        height: 83px;
        `
    }else{
        logo.style.cssText= `
        position: block;
        top: 0%;
        left: 0%;
        `
    }
  });


  //переключение продукции (навигация)
const card_nav = document.querySelectorAll(".card__nav .nav");
card_nav.forEach(item =>{
    item.addEventListener("click", () => {
        for(var i = 0; i < card_nav.length; i++){
            if(card_nav[i] == item){
                card_nav[i].classList.add("active");
            }else{
                card_nav[i].classList.remove("active");
            }
        }
    });
})

//для карусели продуктов
const cards = document.querySelectorAll(".card");
const all_card = document.querySelector(".all__cards");
let isClick = 0;
let count_card = 0;

let start_click, slide_mouse, end_click, between_slide, start_card1;

let real_slide = 0;

all_card.addEventListener('mousedown', (event) => {
    isClick = 1;
    // console.log("start: " + event.clientX);
    
    start_click = event.clientX;
})

all_card.addEventListener('mousemove', (event) => {
    console.log(real_slide);
    if(isClick == 1){
        // console.log("slide: " + (start_click - event.clientX) / 10);
        for(let i = 1; i < real_slide; i++){
            if(real_slide == i - 1)
                cards[real_slide].style.transform = `translate3d(${(0 * 150)+((event.clientX - start_click) / 10)}%, 0, 0)`;
            else
                cards[real_slide].style.transform = `translate3d(${(real_slide - i * 150)+((event.clientX - start_click) / 10)}%, 0, 0)`;
        }
    }
})

all_card.addEventListener('mouseup', (event) => {
    isClick = 0;
    // console.log("end: " + event.clientX);
    end_click = event.clientX;
    between_slide = start_click - end_click;
    // console.log("between: " + (start_click - end_click));
    if(between_slide <= 500 && between_slide >= 0){
        if(between_slide != 0){
            cards[0].style.transform = `translate3d(0, 0, 0)`;
            cards[1].style.transform = `translate3d(150%, 0, 0)`;
        }
    }else{
        if(between_slide > 0){
            real_slide++;
        }else if(between_slide < 0){
            real_slide--;
        }
        if(real_slide <= 0){
            real_slide = 0;
        }
        cards[0].style.transform = `translate3d(-150%, 0, 0)`;
        cards[1].style.transform = `translate3d(0, 0, 0)`;
    }
})

cards.forEach(card => {
    card.style.transform = `translate3d(${count_card * 150}%, 0, 0)`;
    count_card++;
})
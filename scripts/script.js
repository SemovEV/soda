//Переключение между заголовками при нажатии
const h2 = document.querySelectorAll(".history__legend h2");
const history_first = document.querySelector(".history__first");
const history_second = document.querySelector(".history__second");
h2.forEach((item) => {
  item.addEventListener("click", () => {
    for (var i = 0; i < h2.length; i++) {
      if (h2[i] == item) {
        h2[i].classList.add("legend__active");
        if (i == 0) {
          history_first.style.transform = "translate(0)";
          history_second.style.transform = "translate(100%)";
        } else {
          history_second.style.transform = "translate(0)";
          history_first.style.transform = "translate(-100%)";
        }
      } else {
        h2[i].classList.remove("legend__active");
      }
    }
  });
});

//Для переключения слайдера видео
const descrip_nav = document.querySelectorAll(".description__nav");
const video_first = document.querySelector(".video_first");
const video_second = document.querySelector(".video_second");
const video_third = document.querySelector(".video_third");
//Слайдер видео про историю
descrip_nav.forEach((nav) => {
  nav.addEventListener("click", () => {
    for (var i = 0; i < descrip_nav.length; i++) {
      if (descrip_nav[i] == nav) {
        descrip_nav[i].classList.add("description__nav__active");
        if (i == 0) {
          video_first.style.zIndex = 1;
          video_first.style.opacity = 100;
          video_second.style.zIndex = -1;
          video_second.style.opacity = 0;
          video_third.style.zIndex = -1;
          video_third.style.opacity = 0;
        } else if (i == 1) {
          video_first.style.zIndex = -1;
          video_first.style.opacity = 0;
          video_second.style.zIndex = 1;
          video_second.style.opacity = 100;
          video_third.style.zIndex = -1;
          video_third.style.opacity = 0;
        } else {
          video_first.style.zIndex = -1;
          video_first.style.opacity = 0;
          video_second.style.zIndex = -1;
          video_second.style.opacity = 0;
          video_third.style.zIndex = 1;
          video_third.style.opacity = 100;
          video_third.style.opacity = 100;
        }
      } else {
        descrip_nav[i].classList.remove("description__nav__active");
      }
    }
  });
});

//Для плавной прокрутки
const a = document.querySelectorAll("a.local_link");
for (let anchor of a) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault;
    console.log(anchor);
    var block = anchor.getAttribute("href");

    document.getElementById(block).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

//Для плавной прокрутки на вверх
const logo = document.querySelector(".logo");
logo.addEventListener("click", function (e) {
  var block = logo.getAttribute("class");
  block = block.substr(5);

  document.getElementById(block).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

//Отслеживание скролла
window.addEventListener("scroll", function () {
  if (this.pageYOffset >= 10) {
    logo.style.cssText = `
        position: fixed;
        top: 0%;
        left: 0%;
        width: 93px;
        height: 83px;
        `;
  } else {
    logo.style.cssText = `
        position: block;
        top: 0%;
        left: 0%;
        `;
  }
});

//переключение продукции (навигация)
const card_nav = document.querySelectorAll(".card__nav .nav");
card_nav.forEach((item) => {
  item.addEventListener("click", card_nav_click.bind(this, item));
});

let real_slide = 0;

function card_nav_click(item){
  for (var i = 0; i < card_nav.length; i++) {
    if (card_nav[i] == item || i == item) {
      card_nav[i].classList.add("active");
      real_slide = i;
    } else {
      card_nav[i].classList.remove("active");
    }
  }
  for(let i = 0; i < cards.length; i++){
    cards[i].style.transform = `translate3d(${(i - real_slide) * 150}%, 0, 0)`;
  }
}

//для карусели продуктов
const cards = document.querySelectorAll(".card");
const all_card = document.querySelector(".slider_prod");
let isClick = 0;
let count_card = 0;

let start_click, slide_mouse, end_click, between_slide, start_card1;

all_card.addEventListener("mousedown", startSlide.bind(this, 1));
all_card.addEventListener("mousemove", moveSlide.bind(this, 1));
all_card.addEventListener("mouseup", endSlide.bind(this, 1));
all_card.addEventListener("touchstart", startSlide.bind(this, 2));
all_card.addEventListener("touchmove", moveSlide.bind(this, 2));
all_card.addEventListener("touchend", endSlide);
//Функция обработки начала клика
function startSlide(device, event){
  isClick = 1;
  if(device == 2)
    start_click = event.touches[0].clientX;
  else if(device == 1)
    start_click = event.clientX;
}
//Функция обработки движения слайдов
function moveSlide(device, event){
  if (isClick == 1) {
    if(device == 2)
      for(let i = 0; i < cards.length; i++){
        cards[i].style.transform = `translate3d(${(i - real_slide) * 120 + (event.touches[0].clientX - start_click) / 10}%, 0, 0)`;
      }
    else if(device == 1)
      for(let i = 0; i < cards.length; i++){
        cards[i].style.transform = `translate3d(${(i - real_slide) * 120 + (event.clientX - start_click) / 10}%, 0, 0)`;
      }
  }
  if(device == 2)
    end_click = event.touches[0].clientX;
  else if(device == 1)
    end_click = event.clientX;
}
//Функция обработки развёртывания слайдов, задание для их конечной позиции
function endSlide(){
  isClick = 0;
  between_slide = start_click - end_click;
  if (between_slide <= 500 && between_slide >= 0 || between_slide >= -500 && between_slide <= 0) {
    if (between_slide != 0) {
        for(let i = 0; i < cards.length; i++){
            cards[i].style.transform = `translate3d(${(i - real_slide) * 120}%, 0, 0)`;
        }
    }else if(between_slide == 0){
      switch(real_slide){
        case 0:{
          window.open('http://nspltd.ru/soda/');
          break;
        }
        case 1:{
          window.open('http://nspltd.ru/izvest/');
          break;
        }
        case 2:{
          window.open('http://nspltd.ru/gips/');
          break;
        }
        case 3:{
          window.open('http://nspltd.ru/smesi/');
          break;
        }
        case 4:{
          window.open('http://nspltd.ru/perlit/');
          break;
        }
      }
    }
  } else {
    if (between_slide > 0) {
      real_slide++;
    } else if (between_slide < 0) {
      real_slide--;
    }
    if (real_slide < 0) {
      real_slide = 5;
    }else if (real_slide > 5){
      real_slide = 0;
    }
    for(let i = 0; i < cards.length; i++){
        cards[i].style.transform = `translate3d(${(i - real_slide) * 120}%, 0, 0)`;
    }
    card_nav_click(real_slide);
  }
}

cards.forEach((card) => {
  card.style.transform = `translate3d(${count_card * 120}%, 0, 0)`;
  count_card++;
});


//Переключение активных классов у списка
let buyer_li = document.querySelectorAll(".buyer__section .buyer__description .list_description li");
let active_li = 0;


function setActiveLi(){
  buyer_li[active_li].classList.add("active_li");
  if(active_li != 0)
    buyer_li[active_li - 1].classList.remove("active_li");
  else{
    buyer_li[5].classList.remove("active_li");
  }
  if(active_li == 5){
    active_li = 0;
  }else{
    active_li++;
  }
}

var interval = setInterval(setActiveLi, 3000);
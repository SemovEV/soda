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





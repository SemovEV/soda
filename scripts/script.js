const h2 = document.querySelectorAll(".history__legend h2");
const history_first = document.querySelector(".history__first");
const history_second = document.querySelector(".history__second");


//Переключение между заголовками при нажатии
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
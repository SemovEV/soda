const h2 = document.querySelectorAll(".history__legend h2");


//Переключение между заголовками при нажатии
h2.forEach(item =>{
    item.addEventListener("click", () => {
        for(var i = 0; i < h2.length; i++){
            if(h2[i] == item){
                h2[i].classList.add("legend__active");
            }else{
                h2[i].classList.remove("legend__active");
            }
        }
    });
})
function logoopacity(){
    logo.classList.remove("on");
}
window.onscroll = function(){
    let ht = document.documentElement.scrollTop;
    let logo = document.querySelector(".intro .logo img");
    // console.log(ht);
    if(ht > 350){
        logo.classList.add("on");
    } if(ht > 550){                
        logo.classList.add("on2");
    } if(ht > 750){
        logo.classList.add("on3");
    } if(ht > 2000){
        logo.classList.add("on4");
    }

    let introCon = document.querySelectorAll(".intro_detail_position p");
    if(ht > 700){
        introCon[0].classList.add("on");     
        introCon[1].classList.add("on");     
        introCon[2].classList.add("on");     
        introCon[3].classList.add("on");     
        introCon[4].classList.add("on");
    }
}

let classImg = document.querySelector(".class_img");
let classTitle = document.querySelector(".class_txt");
// let conInfo = document.querySelectorAll("div.per");

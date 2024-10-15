var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let width = window.innerWidth;
console.log(width);

if(width <= 994){
    document.querySelector(".topmenu").onclick = function(){
        document.querySelector("header nav").style.left = "0";
    }

    document.querySelector("header nav > p").onclick = function(){
      document.querySelector("header nav").style.left = "-450px";
    };
} else if(width > 994){
    document.querySelector("header nav").style.left = "0px";
}

  // $(function(){
  //   $(".topmenu").click(function(){
  //     $("header nav").css("left","0").css("transition","0.3s");
  //   });
  //   $("header nav > p").click(function(e){
  //     e.preventDefault();
  //     $("header nav").css("left","-450px");
  //   });
  // });

  //if함수해보기
  //header nav 100vh 말고 끝까지는?
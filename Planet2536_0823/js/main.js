gsap.to(".intro_detail_position p:first-child",{
    opacity: 1,
    y: -30,
    scrollTrigger: {
        trigger: ".intro_detail_position p:first-child",
        // markers: true,
        start: "top 45%",
        end: "bottom 50%",
        toggleActions: "play pause resume reverse",
        scrub: 0,
    },
});
gsap.to(".intro_detail_position p:nth-child(2)",{
    opacity: 1,
    y: -30,
    scrollTrigger: {
        trigger: ".intro_detail_position p:nth-child(2)",
        // markers: true,
        start: "top 46%",
        end: "bottom 51%",
        toggleActions: "play pause resume reverse",
        scrub: 0,
    },
});
gsap.to(".intro_detail_position p:nth-child(3)",{
    opacity: 1,
    y: -30,
    scrollTrigger: {
        trigger: ".intro_detail_position p:nth-child(3)",
        // markers: true,
        start: "top 47%",
        end: "bottom 52%",
        toggleActions: "play pause resume reverse",
        scrub: 0,
    },
});
gsap.to(".intro_detail_position p:nth-child(4)",{
    opacity: 1,
    y: -30,
    scrollTrigger: {
        trigger: ".intro_detail_position p:nth-child(4)",
        // markers: true,
        start: "top 48%",
        end: "bottom 53%",
        toggleActions: "play pause resume reverse",
        scrub: 0,
    },
});
gsap.to(".intro_detail_position p:nth-child(5)",{
    opacity: 1,
    y: -30,
    scrollTrigger: {
        trigger: ".intro_detail_position p:nth-child(5)",
        // markers: true,
        start: "top 49%",
        end: "bottom 54%",
        toggleActions: "play pause resume reverse",
        scrub: 0,
    },
});

gsap.to(".logo",{
    opacity: 0,
    scrollTrigger: {
        trigger: ".logo",
        // markers: true,
        start: "2000% 60%",
        end: "6500% 20%",
        toggleActions: "play pause resume reverse",
        scrub: 2,
    },
});

$(function(){
    $(".hidden_desc>div").eq(0).css("opacity","1");
    $(".class_img ul li").hover(function(){
        let i = $(this).index();
        console.log(i)
        // $(".hidden_desc>div").css("opacity","0");
        // $(".hidden_desc>div").eq(i).css("opacity","1");
        if(i == 0){
          $(".class_txt").css("background-image","url(Planet_images/yoga.jpg)") ; 
        }else if(i == 1){
            $(".class_txt").css("background-image","url(Planet_images/camera_master.jpg)") ;
        }else if(i == 2){
            $(".class_txt").css("background-image","url(Planet_images/fitness.png)") ;
        }
        
    })
});

// let classImg = document.querySelector(".class_img");
// let classTitle = document.querySelector(".class_txt");
// let conInfo = document.querySelectorAll("div.per");

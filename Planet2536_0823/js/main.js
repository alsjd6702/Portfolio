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

let classImg = document.querySelector(".class_img");
let classTitle = document.querySelector(".class_txt");
// let conInfo = document.querySelectorAll("div.per");

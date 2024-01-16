let icon = document.getElementById("icon");
let languages = document.getElementById("languages");
let pictureMask = document.getElementById("pictue_mask");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "./assets/sun2.png";
        languages.style.backgroundColor = "#171717";
        pictureMask.style.boxShadow = "0px 0px 13px #a3a3a3a4";
    }else{
        icon.src = "./assets/moon2.png";
        languages.style.backgroundColor = "#f1f1f1";
        pictureMask.style.boxShadow = "0px 5px 13px #000000a4";
    }
}

let tl = gsap.timeline();
tl.from(".gsap_animation_1", {
    opacity: 0,
    duration: 3,
    scrollTrigger: {
        trigger: ".gsap_animation_1",
        scroller: "body",
        scrub: 2,
        start: "top 90%",
        end: "top 60%"
    }
})

tl.from(".gsap_animation_2", {
    opacity: 0,
    duration: 3,
    scrollTrigger: {
        trigger: ".gsap_animation_2",
        scroller: "body",
        scrub: 2,
        start: "top 90%",
        end: "top 60%"
    }
})

tl.from(".language", {
    scale: 0,
    opacity: 0,
    duration: 2,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".language",
        scroller: "body",
        scrub: 2,
        start: "top 70% center",
        end: "top 40%"
    }
})

tl.from(".gsap_animation_3", {
    x: -300,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: ".gsap_animation_3",
        scroller: "body",
        scrub: 2,
        start: "top 60% center",
        end: "top 40%"
    }
})

tl.from(".gsap_animation_4", {
    x: 300,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: ".gsap_animation_4",
        scroller: "body",
        scrub: 2,
        start: "top 60% center",
        end: "top 40%"
    }
})

tl.from(".gsap_animation_5", {
    x: -300,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: ".gsap_animation_5",
        scroller: "body",
        scrub: 2,
        start: "top 60% center",
        end: "top 40%"
    }
})

tl.from(".project_gsap_animation1", {
    y: 200,
    opacity: 0,
    duration: 1
})

tl.from(".project_gsap_animation2", {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".project_gsap_animation2",
        scroller: "body",
        scrub: 2,
        start: "top 60% center",
        end: "top 40%"
    }
})

tl.from(".project_gsap_animation3", {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".project_gsap_animation3",
        scroller: "body",
        scrub: 2,
        start: "top 60% center",
        end: "top 40%"
    }
})

tl.from(".project_gsap_animation4", {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".project_gsap_animation4",
        scroller: "body",
        scrub: 2,
        start: "top 60% center",
        end: "top 40%"
    }
})

tl.from(".project_gsap_animation5", {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".project_gsap_animation5",
        scroller: "body",
        scrub: 2,
        start: "top 60% center",
        end: "top 40%"
    }
})
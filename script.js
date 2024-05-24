const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})

// Initialize GSAP timeline
let tl = gsap.timeline();

// Animation for .gsap_animation_1
tl.from(".gsap_animation_1", {
    opacity: 0,
    duration: 1.5,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".gsap_animation_1",
        scroller: "body",
        scrub: 1,
        start: "top 80%",
        end: "top 60%"
    }
});

// Animation for .gsap_animation_2
tl.from(".gsap_animation_2", {
    opacity: 0,
    duration: 1.5,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".gsap_animation_2",
        scroller: "body",
        scrub: 1,
        start: "top 80%",
        end: "top 60%"
    }
});

// Animation for .language elements
tl.from(".language", {
    scale: 0,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".language",
        scroller: "body",
        scrub: 1,
        start: "top 80%",
        end: "top 50%"
    }
});

// Animation for .gsap_animation_3
tl.from(".gsap_animation_3", {
    x: -300,
    opacity: 0,
    duration: 1.5,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".gsap_animation_3",
        scroller: "body",
        scrub: 1,
        start: "top 70% center",
        end: "top 50%"
    }
});

// Animation for .gsap_animation_4
tl.from(".gsap_animation_4", {
    x: 300,
    opacity: 0,
    duration: 1.5,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".gsap_animation_4",
        scroller: "body",
        scrub: 1,
        start: "top 70% center",
        end: "top 50%"
    }
});

// Animation for .gsap_animation_5
tl.from(".gsap_animation_5", {
    x: -300,
    opacity: 0,
    duration: 1.5,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".gsap_animation_5",
        scroller: "body",
        scrub: 1,
        start: "top 70% center",
        end: "top 50%"
    }
});

// Animation for .project_gsap_animation1
tl.from(".project_gsap_animation1", {
    y: 200,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

// Animation for .project_gsap_animation2
tl.from(".project_gsap_animation2", {
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".project_gsap_animation2",
        scroller: "body",
        scrub: 1,
        start: "top 70% center",
        end: "top 50%"
    }
});

// Animation for .project_gsap_animation3
tl.from(".project_gsap_animation3", {
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".project_gsap_animation3",
        scroller: "body",
        scrub: 1,
        start: "top 70% center",
        end: "top 50%"
    }
});

// Animation for .project_gsap_animation4
tl.from(".project_gsap_animation4", {
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".project_gsap_animation4",
        scroller: "body",
        scrub: 1,
        start: "top 70% center",
        end: "top 50%"
    }
});

// Animation for .project_gsap_animation5
tl.from(".project_gsap_animation5", {
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".project_gsap_animation5",
        scroller: "body",
        scrub: 1,
        start: "top 70% center",
        end: "top 50%"
    }
});

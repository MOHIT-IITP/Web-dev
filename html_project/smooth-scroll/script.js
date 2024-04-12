const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline({
    scrollTrigger:{
        trigger: ".page2",
        start:"10% 50%",
        end: "60% 50%",
        // markers: true,
        scrub:1,
    },
})
    
tl.to(".text1",{
    width:"100%",
})
    
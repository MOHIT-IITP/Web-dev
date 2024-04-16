gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({scrollTrigger:{
    trigger:".page1",
    start:"50% 50%",
    end: "+=100%",
    scrub:true,
    markers:true,
    pin: true,
}})

tl.to("#leftmount",{
    x:-300,
},"mount");
tl.to("#rightmount",{
    x:300,
},"mount");
tl.to("#man",{
    scale:0.7,
    y:100,
},"mount")
tl.to("#bg",{
    scale:1.3,
},"mount")
tl.to(".page1 h1",{
    scale:1.5,
    y:300,
},"mount")
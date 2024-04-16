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
tl.to("#stone, #man",{
    scale:0.7,
},"mount")
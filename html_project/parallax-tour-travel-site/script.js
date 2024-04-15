gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({scrollTrigger:{
    trigger:".main",
    start:"50% 50%",
    end: "90% 50%",
    scrub: true,
}})



tl.to("#leftmount",{
    x:-150,
    y:100,
},"mountain");
tl.to("#rightmount",{
    x:150,
    y:100,
},"mountain");

tl.to("#bg",{
    scale:1.2,
},"mountain");

tl.to("#man",{
    scale:0.9,
    y:140,
},"mountain");

tl.to("#cloud1",{
    x:-200,
},"mountain");

tl.to("#cloud2",{
    x:200,
},"mountain");
tl.to(".main h1",{
    scale:1.3,
    y:200,
},"mountain")
tl.to(".box",{
    y:100,
},"mountain")
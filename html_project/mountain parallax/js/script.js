gsap.registerPlugin(ScrollTrigger);
gsap.from(".main h1",{
    y:-300,
    opacity:0,
})
var tl = gsap.timeline({scrollTrigger:{
    trigger:".main2",
    start:"-50% 50%",
    end:"40% 50%",
    scrub:true,
}})

tl.to("#bird1",{
    x:1900,
},"leaf")
tl.to("#leaf1",{
    x:-400,
},"leaf")

tl.to("#leaf2",{
    x:400,
},"leaf")

tl.to("#bush1",{
    y:-300,
},"leaf")
tl.to("#bush2",{
    y:200,
},"leaf")
tl.to("#bar",{
    y:-300,
},"leaf")

tl.to(".main h1",{
    y:400,
    scale:1.5,
},"leaf")
tl.to("#sun",{
    y:600,
},"leaf")

tl.to("#mountain1",{
    y:200,
})
tl.to("#mountain2",{
    y:300,
})
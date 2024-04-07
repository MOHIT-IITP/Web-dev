gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({scrollTrigger:{
    trigger:".main2",
    start:"-50% 50%",
    end:"30% 50%",
    scrub:true,
}})

tl.to("#leaf1",{
    x:-300,
},"leaf")

tl.to("#leaf2",{
    x:300,
},"leaf")

tl.to("#bush1",{
    y:200,
},"leaf")

tl.to("#bush2",{
    y:300,
},"leaf")
tl.to(".main h1",{
    y:400,
    scale:1.5,
},"leaf")
tl.to("#sun",{
    y:600,
},"leaf")

tl.to("#mountain1",{
    y:-50,
})
tl.to("#mountain2",{
    y:-100,
})
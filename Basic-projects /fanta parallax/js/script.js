gsap.registerPlugin(ScrollTrigger);
gsap.from(".one h1",{
    y:-300,
    duration:1.5,
    opacity:0,
})
var tl = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"-30% 50%",
    end:"50% 50%",
    scrub:true,
}})

tl.to("#fanta",{
    top:"115%",
    left:"0%",
},"orange")

tl.to("#orange",{
    top:"150%",
    left:"3%",
},"orange")

tl.to("#orange1",{
    top:"155%",
    left:"25%",
},"orange")

tl.to("#leaf",{
    top:"110%",
    left:"30%",
},"orange")

tl.to(".one h1",{
    scale:3,
},"orange")

gsap.to(".right p1",{
    y:50,
    yoyo:true,
    repeat:-1,
})

var tl2 = gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"-30% 50%",
    end:"50% 50%",
    scrub:true,
}})

tl2.to("#fanta",{
    top:"210%",
    left:"30%",
},"lemon")

tl2.to("#leaf",{
    top:"200%",
    left:"3%",
},"lemon")

tl2.to("#orange",{
    top:"200%",
    left:"55%",
},"lemon")
tl2.to("#orange1",{
    top:"240%",
    left:"30%",
},"lemon")
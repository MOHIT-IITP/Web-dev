var tl = gsap.timeline();
tl.from(".page1 h1",{
    y:-300,
    duration:1,
    opacity:0,
})

tl.from(".page1 h3",{
    y:300,
    duration:1,
    opacity:0,
})

tl.from(".page1 p",{
    y:50,
    yoyo:true,
    repeat:-1,
})

gsap.from(".img1",{
    x:200,
    y:200,
    duration:1.5,
    delay:1,
})
gsap.from(".img2",{
    x:-200,
    y:-200,
    duration:1.5,
    delay:1,
})
var img1 = document.querySelector(".img1")
var img2 = document.querySelector(".img2")
var img3 = document.querySelector(".img3")
var shoebg = document.querySelector(".shoebg")
var black = document.querySelector(".black")
var blue = document.querySelector(".blue")
var white = document.querySelector(".white")

black.addEventListener("mouseenter",function(){
    img1.style.opacity=1
    shoebg.style.backgroundColor="rgb(100,100,100)"
})
black.addEventListener("mouseleave",function(){
    img1.style.opacity=0
})
blue.addEventListener("mouseenter",function(){
    img3.style.opacity=1
    shoebg.style.backgroundColor="skyblue"
})
blue.addEventListener("mouseleave",function(){
    img3.style.opacity=0
})
white.addEventListener("mouseenter",function(){
    img2.style.opacity=1
    shoebg.style.backgroundColor="white"
})
white.addEventListener("mouseleave",function(){
    img2.style.opacity=0
})
var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
main.addEventListener("mousemove",function(ket){
    crsr.style.left=ket.x+"px"
    crsr.style.top=ket.y+"px"
})
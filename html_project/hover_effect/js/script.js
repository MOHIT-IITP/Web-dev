var e = document.querySelectorAll(".elem")

e.forEach(function(val){
  val.addEventListener("mouseenter",function(){
    val.childNodes[3].style.opacity=1
  })  
  val.addEventListener("mouseleave",function(){
    val.childNodes[3].style.opacity=0
  })  
  val.addEventListener("mousemove",function(ket){
    val.childNodes[3].style.left=ket.x+"px"
    val.childNodes[3].style.top=ket.y+"px"
  })  
});
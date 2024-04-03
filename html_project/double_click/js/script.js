var box = document.querySelector(".box")
var love = document.querySelector(".box #love")
var flag=0
box.addEventListener("dblclick",function(){
    love.style.transform = 'translate(-50%,-50%)  scale(1.5)'
    love.style.opacity=0.8
    setTimeout(function(){
        love.style.transform = 'translate(-50%,-50%)  scale(0)'
    },2000);
});
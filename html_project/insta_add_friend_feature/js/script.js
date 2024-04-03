var btn = document.querySelector(".box button")
var h = document.querySelector(".box h1")

var flag =0

btn.addEventListener("click",function(){
    if(flag==0){
        btn.innerHTML="Remove Friend"
        h.innerHTML="Friends"
        h.style.color="Green"
        flag=1
    }
    else{
        btn.innerHTML="Add Friend"
        h.innerHTML="Stranger"
        h.style.color="Red"
        flag=0
    }
})
const syMyName = function () {
  console.log("Mohiitp");
};

setTimeout(syMyName, 2000);

const changeName = function () {
  document.querySelector("h1").innerHTML = "Competitive Programmer";
};

const timeoutID = setTimeout(changeName, 3000);
const stopbtn = document.querySelector("#stop");

stopbtn.addEventListener("click", function () {
  console.log(stop);
  clearTimeout(timeoutID);
});

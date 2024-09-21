const startbtn = document.querySelector("#start");
const stopbtn = document.querySelector("#stop");

//making the function to change the background
const selectColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

const changeColor = function () {
  document.body.style.backgroundColor = selectColor();
};

let startchange;

startbtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (!startchange) {
    startchange = setInterval(changeColor, 500);
  }
});

stopbtn.addEventListener("click", function (e) {
  e.preventDefault();
  clearInterval(startchange);
  startchange = null;
});

const startbtn = document.querySelector("#start");
const stopbtn = document.querySelector("#stop");

// making the function to say the name
const sayMyName = function () {
  console.log("MOHIITP");
  console.log("IITP");
};

// making the setinterval with interval of 1 sec;
let startInter;

// adding the event to the start button
startbtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (!startInter) {
    startInter = setInterval(sayMyName, 1000);
  }
});

// adding the even to stop button
stopbtn.addEventListener("click", function (e) {
  e.preventDefault();
  clearInterval(startInter);
  startInter = null;
});

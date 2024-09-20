// making function to say name
const syMyName = function () {
  console.log("Mohiitp");
};

// setting time out to say name at 2 sec
setTimeout(syMyName, 2000);

// changing name int the function
const changeName = function () {
  document.querySelector("h1").innerHTML = "Competitive Programmer";
};

const timeoutID = setTimeout(changeName, 3000);
// creating button named stop to stop the time out opeartion
const stopbtn = document.querySelector("#stop");

// stoping the time out
stopbtn.addEventListener("click", function () {
  console.log(stop);
  clearTimeout(timeoutID);
});

const printName = function () {
  console.log("MohitKumar");
  console.log("from IITP");
};

// setting interval of 1 sec  to print something
const interval = setInterval(printName, 1000);

document.querySelector("#start").addEventListener("click", function () {
  console.log("Interval Got stopped");
  clearInterval(interval);
});

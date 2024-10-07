// explicit function
function mynew(a, b) {
  return a + b;
}
console.log(mynew(23, 34));

const Lnew = function (a, b) {
  return a + b;
};
Lnew(23, 4); // this will not print the value in the terminal(console)
console.log(Lnew(23, 43));

// implicit function

// const Onew = (first , second) => first + second ;

const Onew = (first, second) => first + second;
const Onew = (first, second) => console.log(first + second);

console.log(Onew(2, 3));

// using $this
const newfun = () => {
  fullname = "mohit";
  welcome = () => {
    console.log(`${this.fullname}`);
  };
  welcome();
};

console.log(newfun());

// hoisting
newfunc1(); // calling before creating this

function newfunc1() {
  console.log("this is function 1");
}

// cannot declare this function before creating this
nyc(); // this will give error

const nyc = function () {
  console.log("this is second fucntion");
};

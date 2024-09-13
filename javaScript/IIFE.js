// IIFE 
// immediately invoke function expression

(function newF(){
  // named IIFE
  console.log("hewwlo");
})();     // use semicolon to end this function


// creating another arrow function (immediately invoking function)

// arrow function immediately invoke
( () => {
  // simple IIFE
  console.log("this is arrow function");
})();


( (name) => {
  console.log("this is arrow function", name);
})("mohit")


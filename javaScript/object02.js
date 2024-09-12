console.log("object 02")

const usr = {
  name : "mohit",
  age : 23, 
  email : "mohit@google.com"
}

usr.greetings  = function(){
  console.log(` Hello from ${this.name}`); // use this if already in the object
}

console.log(usr.greetings());


// another day
const newUser = new Object(); // singleton
const oldUser = {};  // not singleton


newUser.email = "codingbymohit@google.com";
newUser.age = 23;
newUser.height = 173;
newUser.name = {
  fullname : "mohit kumar",
  lastname : "krishna"
};

console.log(newUser.name?.surname); // ? to check if that is present there or not 



// how to merge two or more object together 
const source1 = {
  name : "mohit",
  age: 23,
  gender : "male"
}

const source2 = {
  name : "Abhijeet",
  age: 22,
  gender: "male"
}

const source3 = {
  name : "abhishek",
  age:43,
  gender: "rather not to say"
}

const nothing = Object.assign({}, source1, source2, source3);
                          // target   ---- source -----
console.log(nothing);





console.log("object 02")

const usr = {
  name : "mohit",
  age : 23, 
  email : "mohit@google.com"
}

usr.greetings  = function(){
  console.log(` Hello from ${this.name}`);
}

console.log(usr.greetings());

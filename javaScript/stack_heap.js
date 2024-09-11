// basic printing process
console.log("hello ")

let fullname = "mohit kumar";
let petname = fullname;
petname = "golden";


// example of stack (primitive data)
// stack don't change the original value; 
console.log(fullname); // should print (mohit kumar)
console.log("\n");
console.log(petname); // shoudl print(golden)


// exmaple of heap (non primitive data)
// heap uses the call by reference which changes the original value
let student1  = {
  fullname : "mohit",
  age : "23",
  gender : "Male",
  upi : "923234@ybl"
}

let student2 = student1 ;
student2.age = "54";

console.log(student2);
console.log(student1.age);




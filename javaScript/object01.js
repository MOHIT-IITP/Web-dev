console.log("Learning Object Today")

// singleton 
// Object.create       using constructor

const mySym = Symbol("key1")

const user = {
  name : "mohit",
  "full name" : "mohit kumar",
  age : 23,
  [mySym] : "key12",
  college : "IITP",
  email : "mohit@google.com"
}

// two ways to get the keys and value of object
console.log(user.email);
console.log(user["email"]);
console.log(user["full name"]);  // important
console.log(user[mySym]);   // important



const user1 = {
  name : "golden",
  "full name" : "mohit kumar",
  age : 23,
  [mySym] : "key12",
  college : "IITP",
  email : "mohit@chatgpt.com"
}

Object.freeze(user1);  
// from now no change will be add to the main object
user1.email = "mohit@microsoft.com";
console.log(user1.email);

//user1.email = "golden@iitp.com";
//console.log(user1.email);  // mohit@microsoft.com





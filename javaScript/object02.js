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
  name1 : "mohit",
  age1: 23,
  gender1 : "male"
}

const source2 = {
  name2 : "Abhijeet",
  age2: 22,
  gender2: "male"
}

const source3 = {
  name : "abhishek",
  age:43,
  gender: "rather not to say"
}

const nothing = Object.assign({}, source1, source2, source3);
                          // target   ---- source -----
console.log(nothing);


// another method

const target1 = {...source1, ...source2, ...source3}
console.log(target1);

// how to print only the keys and value in object

// printing the keys 
const usr1 = {
  name:"mohit",
  gender: "male",
  age: 23,
  college : "IITP",
  address: "Bengaluru"
}

console.log(Object.keys(usr1));  //[ 'name', 'gender', 'age', 'college', 'address' ]

// printing the values
console.log(Object.values(usr1)); // [ 'mohit', 'male', 23, 'IITP', 'Bengaluru' ]


// printing both the keys and value in form of array
console.log(Object.entries(usr1));


/*[
  [ 'name', 'mohit' ],
  [ 'gender', 'male' ],
  [ 'age', 23 ],
  [ 'college', 'IITP' ],
  [ 'address', 'Bengaluru' ]
]*/

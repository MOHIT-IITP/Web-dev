const user = ["mohit", "abhijeet","abhishek","krishna"]

user.forEach(function (name) {
  console.log(name);
})

// another one

const customer = ["volvo","bmw","mercedes","toyota"]

function myname(username) {
  console.log(username);
}

customer.forEach(myname) // here pass the reference



// i want to print first the elem , index , whole array

customer.forEach( (item,index,arr) => {
  console.log(item, index, arr);
})

/*
volvo 0 [ 'volvo', 'bmw', 'mercedes', 'toyota' ]
bmw 1 [ 'volvo', 'bmw', 'mercedes', 'toyota' ]
mercedes 2 [ 'volvo', 'bmw', 'mercedes', 'toyota' ]
toyota 3 [ 'volvo', 'bmw', 'mercedes', 'toyota' ]
*/



// JSON
const json = [{
  name: "mohit",
  course: "js chai aur code",
  age:23,
  gender: "male"

},{
  name: "abhijeet",
  course: "react chai aur code",
  age:32,
  gender: "male"

  },{
  name: "abhishek",
  course: "mongo chai aur code",
  age:32,
  gender: "Rather not to say"
  

  }]

json.forEach((item) => {
  console.log(item.course);
})

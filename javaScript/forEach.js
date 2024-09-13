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


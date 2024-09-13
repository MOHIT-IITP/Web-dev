const course = [
  {
    name: "mohit",
    age : 23,
    gender : "male",
    course: "CS"
  },
  {
    name: "abhijeet",
    age : 23,
    gender : "female",
    course: "CS"
  },
  {
    name: "abhishek",
    age : 32,
    gender : "rather not to say",
    course: "CS"
  }
]

for(let x of course){
  if(x.course == "CS"){
    console.log(x.name);
  }
}


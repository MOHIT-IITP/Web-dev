// object de - structure
const course = {
  course: "js in 1 hr",
  price: "999999",
  teacher : "mohit choy"
}

const {teacher} = course
// direct teacher likh kar kaam ho jayega

console.log(teacher); // mohit choy


//another tarika
const { price : p} = course

console.log(p);

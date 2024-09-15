// using reduce in js
const arr = [1,2,3]

const total = arr.reduce((acc, curr) => {
  console.log(`acc : ${acc}, and curr: ${curr}`);
  return acc + curr;
},0)

console.log(total);
/*acc : 0, and curr: 1
acc : 1, and curr: 2
acc : 3, and curr: 3
6
*/


// doing the same thing in one line

const mytotal = arr.reduce ( (acc, curr) => acc+curr , 0)
console.log(mytotal);



// add all the price of the course

const course = [
  {
    name:"javaScript",
    price:12999,

  },
  {
    name:"Cpp",
    price:999,
  
  },
  {
    name:"python",
    price:1999,
  }
]

const totalPrice = course.reduce((acc, curr) => {
  return acc + curr.price;
},0)
 
console.log(totalPrice);

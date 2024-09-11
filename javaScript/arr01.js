// how to add two arr 

// first method
const hero = ["iron man", "spider man ","hulk", "hawkeye"];

const car = ["volvo", "bmw","audi","nano"];

const all  = hero.concat(car);
console.log(all);


// second method 

const allThing = [...hero , ...car];
console.log(allThing);


// how to make single array from concatenated array
const another = [2,2,3,[4, 5 ,3 ],[1,2,3,4,[,3,4,1,2]]];

const main = another.flat(Infinity);
console.log(main);


// how to check if the given element is array or not 

console.log(Array.isArray("Mohit")); // prints false

// if not array then make it array
console.log(Array.from("mohit")); //[ 'm', 'o', 'h', 'i', 't' ]

console.log(Array.from({name: "mohit"})) // interesting []
// not able to change to the array



//how to change multiple elem to array

let score1 = 100
let score2 = 230
let score3 = 400

console.log(Array.of(score1, score2 , score3)); //[ 100, 230, 400 ]







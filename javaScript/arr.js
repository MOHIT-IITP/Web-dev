console.log("Learning js (Array)")

// creating array 
const arr = [1,2,3,4,4,5,6,7,9];

// adding the element in the array
arr.push(23);

// deleting the last  elemen in the array
arr.pop();

//adding the element in the first;
arr.unshift(99);

// deleting the first element in the arr
arr.shift(99);

// check if x element is present or not 
console.log(arr.includes(4)); // includes


// check index of  an element
console.log(arr.indexOf(777));
// if this return -1 then it is not present 

const myArr = arr.join(); // array converts into string
console.log(myArr);      // myArr  =  string



// slice : only print the part 
// dont change the array

//splice : take out the part from the original array
//changes the array

const arr1  = [1,2,3,4,5,5,6,7];
console.log(arr1.splice(1,3)); // [ 2, 3, 4 ]
console.log(arr1)   //[ 1, 5, 5, 6, 7 ]

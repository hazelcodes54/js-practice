
//the spread operator looks just like the rest operator
//used to expand elements in arrays, objects, or function arguments. 

// //example usage:
// let numbers = [1, 2, 3];
// let moreNumbers = [...numbers, 4, 5, 6];

// console.log(moreNumbers); // Output: [1, 2, 3, 4, 5, 6]
// //basically combines the 2 arrays together


// const arr1 = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
// let arr2;
// (function() {
//   arr2 = arr1;
//   arr1[0] = 'Potato'
// }) ();
// console.log(arr2);

//what if we want arr2 to be a copy of arr1?

const arr1 = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
let arr2;
(function() {
  arr2 = [...arr1];
  arr1[0] = 'Potato'
}) ();
console.log(arr2);

// rest operator allows multiple variables

// const sum = (function() {
//   return function sum(...args) {  //rest operator 
//     return args.reduce((a, b) => a + b, 0);
//   };
// })();

// console.log(sum(1, 2, 3, 4, 5, 6));

// so before the rest operator we could only pass in 3 arguments and now we can have any humber of arguments :)

// using rest operator with destructuring

// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function removeFirstTwo(list) {
//   const [ , ,...arr] = list;  //the comma is saying do nothing for the first 2 elements and keep everything else the same
//   return arr;
// }

// const arr = removeFirstTwo(source);
// console.log(arr);
// console.log(source);
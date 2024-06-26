// var magic = function() {
//   return new Date();
// };

//instead of doing whats on top you can use arrow functions:

// var magic = () => {
//   return new Date();
// };

//to make it even shorter and easier

const magic = () => new Date();


// //arrow functions with parameters

// var myConcat = (arr1, arr2) => arr1.concat(arr2);
// console.log(myConcat([1, 2], [3, 4, 5]));

//higer order functions
//filter function to filter out the non negatives
//isInteger function to check if its an integer 
//map function will return the square of those positive integers

const myArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
  const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
  return squaredIntegers;
};

const squaredIntegers = squareList(myArray);
console.log(squaredIntegers);


 

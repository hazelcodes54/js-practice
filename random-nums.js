
// //generate random fractions using the math.random() function

// function randomFraction() {
  
//   return Math.random();   //this will give random decimals 
// }

// console.log(randomFraction());


//generate random whole numbers

// var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

// function randomWholeNum() {

//   return Math.floor(Math.random() * 10);
// }

// console.log(randomWholeNum());


//generate random numbers within a given min and max

// function myRandomRange(myMin, myMax) {

//   return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
// }

// console.log(myRandomRange(1, 9));

//parseInt function 

function convertToInteger(str) {
  return parseInt(str);
}

console.log(convertToInteger("56"));
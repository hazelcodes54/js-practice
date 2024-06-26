
//syntax:
// condition ? statement-if-true : statement-if-else;

// function checkEqual(a, b) {
//   return a === b ? true : false;
// }

// console.log(checkEqual(1, 2));


//multiple ternary operators

function checkSign(num) {
  return num > 0 ? "positive" : num < 0  ? "negative": "zero"
}

console.log(checkSign(0));
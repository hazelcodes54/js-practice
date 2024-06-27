
//print all even number from 0 - 10

function evenNum() {
  var evenNumbers = [];
  for (let num = 0; num <= 10; num++) {
    if (num % 2 == 0) {
      console.log(num);
      evenNumbers.push(num);
    }
  }
  return evenNumbers;
}

var evenNumbers = evenNum();
console.log(evenNumbers);
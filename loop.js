
// var myArray = [];

// var i = 0;
// while(i < 5) {
//   myArray.push(i);
//   i++;
// }

// console.log(myArray);


//iterate with loops (for loops)

// var myArray = [];

// for(var i = 0; i < 5; i++) {
//   myArray.push(i);
// }

// console.log(myArray);

//an array of even numbers

// var ourArray = [];

// for(var i = 0; i < 10; i += 2 ) {
//   ourArray.push(i);
// }

// console.log(ourArray);


//you can also count even numbers backwards with a for loop

// var ourArray = [];

// for(var i = 10; i > 0; i -= 2) {
//   ourArray.push(i);
// }

// console.log(ourArray);


//iterate through the contents of an array using for loop and add the elements

// var myArr = [2, 3, 4, 5, 6];
// var total = 0;

// for (var i = 0; i < myArr.length; i++) {
//   total += myArr[i];
// }

// console.log(total);

//nested for loop

// function multiplyAll(arr) {
//   var product = 1;

//   for (var i = 0; i < arr.length; i++) {            //outter array
//     for (var j = 0; j < arr[i].length; j++) {       //inner array
//       product *= arr[i][j];
//     }
//   }
//   return product;
// }

// var product1 = multiplyAll([[1,2], [3,4], [5,6,7]]);
// console.log(product1);


//Do-while loops

// var myArray = [];
// var i = 10;

// do {
//   myArray.push(i);
//   i++;
// } while (i < 5)

// console.log(i , myArray);
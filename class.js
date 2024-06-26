//use the keyword class to create a class
//Always add a method named constructor():
// class ClassName {
//   constructor() { ... }
// }

// function makeClass() {
//   class Vegetable {
//     constructor(name) {
//       this.name = name;
//     }
//   }
//   return Vegetable;
// }

// const Vegetable = makeClass();
// const carrot = new Vegetable('carrot');
// console.log(carrot.name);


//getters and setters
function makeClass() {
  class Thermostat {
    constructor(temp) {
      this._temp = 5/9 * (temp - 32);       //private variable
    }
    get temperature() {
      return this._temp;
    }
    set temperature(updatedTemp) {
      this._temp = updatedTemp;
    }
  }
  return Thermostat;
}
 
const Thermostat = makeClass();
const thermos = new Thermostat(70);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);  //this will console the updated temperature

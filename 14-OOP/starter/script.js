'use strict';

//////////// SECTION CONSTRUCTOR FUNCTION
// arrow function dosent work
const Person = function (firstName, birthYear) {
  //  instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  //  never creat a method in conctruction function it will be attachted to every obj
  // this.clalcAge = function () {
  //   console.log(2023 - this.birthYear);
  //
  //   };
};

const evie = new Person('evie', 2003);
// 1. new {} is created
// 2.function is clled , this={}
// 3. {} linked to prototype
// 4. function automatically return {}
console.log(evie);

const jonas = new Person('jonas', 1993);
console.log(jonas);

console.log(jonas instanceof Person);

//////////// SECTION POROTYPES
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

evie.calcAge();
console.log(evie.__proto__);
//  the proto obj is set to prototype property of constructor function
console.log(evie.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(evie));
console.log(Person.prototype.isPrototypeOf(Person));
//  the prototype is the prototype that is ganna be used by obj not the prototype of person

Person.prototype.species = 'Homo Sapiens';
console.log(evie.species, jonas.species);

console.log(evie.hasOwnProperty('firstName'));

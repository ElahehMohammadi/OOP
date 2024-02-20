"use strict";
/*
//////////// SECTION CONSTRUCTOR FUNCTION
// arrow function dosent work
const Person = function (firstName, birthYear) {
  //  instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  //  never creat a method in conctruction function it will be attachted to every obj
  // this.clalcAge = function () {
  //   console.log(2023 - this.birthYear);
  // };
};

const evie = new Person("evie", 2003);
// 1. new {} is created
// 2.function is clled , this={}
// 3. {} linked to prototype
// 4. function automatically return {}
console.log(evie);

const jonas = new Person("jonas", 1993);
console.log(jonas);

console.log(jonas instanceof Person);

Person.hey = function () {
  console.log("Hey there 👋");
};

Person.hey();

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

Person.prototype.species = "Homo Sapiens";
console.log(evie.species, jonas.species);

console.log(evie.hasOwnProperty("firstName"));

console.log(evie.__proto__);
console.log(evie.__proto__.__proto__);
console.log(evie.__proto__.__proto__.__proto__);
console.dir(Person.prototype.constructor);

const arr = [3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 10]; // new array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector("h1");
console.dir(h1);

console.dir((x) => x + 1);
*/
///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀


const car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
const car1 = new car("BMW", 120);
car1.accelerate();
car1.brake();
const car2 = new car("Mercedes", 95);
car2.accelerate();
car2.brake();
*/

//////////// SECTION class expression
// const PersonCl = class {};

//////////// SECTION class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //methods will be added to .prototype property
  calcAge() {
    console.log(2024 - this.birthYear);
  }
  greet() {
    console.log(`Hi ${this.firstName}`);
  }
  get age() {
    return 2024 - this.birthYear;
  }
  // try to set a property that already exist
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }
  static hey() {
    console.log("Hey there 👋");
    console.log(this);
  }
}

const jessica = new PersonCl("Jessica Davis", 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);
console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hi ${this.firstName}`);
// };
jessica.greet();

const walter = new PersonCl("Walter White", 1965);

PersonCl.hey();
// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

//////////// SECTION getter and setters

const account = {
  owner: "jonas",
  movements: [200, 530, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);
account.latest = 50;
console.log(account.movements);

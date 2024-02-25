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

//////////// SECTION  Coding Challenge #1

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
/*
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

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = "Steven";
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init("sarah", 1979);
sarah.calcAge();
*/

///////////////////////////////////////

//////////// SECTION  Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/
/*
class car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const car1 = new car("Ford", 120);
console.log(car1.speedUS);
car1.accelerate();
car1.brake();
car1.speedUS = 50;
console.log(car1);
*/
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};
const student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
// link prototype
student.prototype = Object.create(Person.prototype);
student.prototype.introduce = function () {
  console.log(`Hi my name is ${this.firstName} and I study ${this.course}`);
};
const mike = new student("Mike", 2003, "Computer Science");
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(mike.__proto__.__proto__.__proto__);

student.prototype.consturctor = student; // link constructor with student;
console.dir(student.prototype.consturctor);
*/
///////////////////////////////////////

//////////// SECTION  Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
/*
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
const EV = function (make, speed, charge) {
  car.call(this, make, speed);
  this.charge = charge;
};
EV.prototype = Object.create(car.prototype);
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};
const car1 = new EV("BMW", 120, 90);
car1.accelerate();
car1.brake();
const car2 = new car("Mercedes", 95);
car2.accelerate();
car2.brake();
*/

//////////// SECTION ES6 classes inheritance
/*
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
class studentCL extends PersonCl {
  constructor(fullName, birthYear, course) {
    // always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`Hi my name is ${this.fullName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(
      `I'm ${
        2024 - this.birthYear
      } years old, but as a student I feel more like ${
        2024 - this.birthYear + 10
      }`
    );
  }
}
// const martha = new PersonCl("Martha Jones", 2012);
const martha = new studentCL("Martha Jones", 2012, "Computer Science");

martha.introduce();
martha.calcAge();
*/

//////////// SECTION Object.create inheritance
/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const studentproto = Object.create(PersonProto);
studentproto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
studentproto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const jay = Object.create(studentproto);
jay.init("Jay", 2010, "Computer Science");
jay.introduce();
jay.calcAge();
*/

//////////// SECTION
class account {
  //public field (instances)
  locale = navigator.language;

  // private field
  #movments = [];

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //protected property
    this._pin = pin;
    // this._movments = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account ${this.owner}`);
  }
  getMovment() {
    return this.#movments;
  }
  // public interface
  deposit(val) {
    this.#movments.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}
const acc1 = new account("Jonas", "EUR", 1111);
console.log(acc1);
console.log(acc1.getMovment());
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1);

"use strict";
/*
let hasDriversLiscense = false;
const passTest = true;

if (passTest) hasDriversLiscense = true;
if (hasDriversLiscense) console.log(`i can drive :D`);
function logger() {
  console.log(` Hi i'm Evie!`);
}
logger();
function fruitProcesser(apples, oranges) {
  console.log(apples, oranges);
  const juice = `juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
console.log(fruitProcesser(3, 4));
// function declaration
function calcAge1(birthYear) {
  return 2023 - birthYear;
}
console.log(calcAge1(2003));

// function expression
const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};
console.log(calcAge2(2003));

// Arrow function
const calcAge3 = (birthYear) => 2023 - birthYear;
console.log(calcAge3(2003));

const YearUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retierment = 65 - age;
  return `${firstName} retires in ${retierment} years!`;
};
console.log(YearUntilRetirement(2003, `Evie`));

function fruitProcesser(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `juice with ${applePieces} apple Pieces and ${orangePieces} orange Pieces.`;
  return juice;
}
function cutFruitPieces(fruit) {
  return fruit * 4;
}
console.log(fruitProcesser(2, 3));
// challenge#1

const calcAve = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(aveDolphins, aveKoalas) {
  if (aveDolphins >= aveKoalas * 2) {
    return `Dolphins win (${aveDolphins} vs. ${aveKoalas})`;
  } else if (aveDolphins * 2 <= aveKoalas) {
    return `Koalas win (${aveKoalas} vs. ${aveDolphins})`;
  } else {
    return `No team wins...`;
  }
}
// data1
let aveDolphins = calcAve(44, 23, 71);
let aveKoalas = calcAve(65, 54, 49);
console.log(checkWinner(aveDolphins, aveKoalas));

// data2
aveDolphins = calcAve(85, 54, 41);
aveKoalas = calcAve(23, 34, 27);
console.log(checkWinner(aveDolphins, aveKoalas));
const friends = ["Michel", "Steven", "Peter"];
console.log(friends);
const years = new Array(1991, 1984, 2008, 2022);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends[friends.length - 1]);

const evie = ["Evie", "221B", 2022 - 2003, "student", friends];
console.log(evie);

// Exercise
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};
const years1 = [1990, 1967, 1987, 2001, 2021];
for (let i = 0; i < years1.length; i++) {
  console.log(calcAge2(years1[i]));
}
const friends = ["Michel", "Steven", "Peter"];
const newlen = friends.push("sara");
console.log(newlen);

// challenge 2

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [125, 555, 44];
const tips = [calcTip([bills[0]]), calcTip([bills[1]]), calcTip([bills[2]])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);

const evieArray = [
  "Evie",
  "221B",
  2022 - 2003,
  "student",
  ["sara", "saba", "shaghayegh"],
];
const evie = {
  firstName: "Evie",
  lastName: "221B",
  age: 2022 - 2003,
  job: "student",
  friends: ["sara", "saba", "shaghayegh"],
};
console.log(evie.lastName);
console.log(evie["lastName"]);
const nameKey = "Name";
console.log(evie["first" + nameKey]);

// challenge
console.log(
  `${evie.FirstName} has ${evie.friends.length} friend, and his beat friend is called ${evie.friends[0]}`
);

const evie = {
  FirstName: "Evie",
  lastName: "221B",
  birthYear: 2003,
  job: "student",
  friends: ["sara", "saba", "shaghayegh"],
  hasDriveerLicencense: false,
  // calcAge: function (birthYear) {
  //   return 2022 - birthYear;
  // },
  // calcAge: function () {
  //   //console.log(this);
  //   return 2022 - this.birthYear;
  // },
  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },

  summery: function () {
    return `${this.FirstName} is a ${this.calcAge()}-years old ${
      this.job
    }, and she has ${this.hasDriveerLicencense ? "a" : "no"} drivers license`;
  },
};
// console.log(evie.calcAge());
// console.log(evie.age);

console.log(evie.summery());

// console.log(evie["calcAge"]);
// x;
// challenge#3

const mark = {
  firstName: "mark",
  lastName: "miller",
  mass: 78,
  height: 1.69,

  calcMBI: function () {
    this.MBI = this.mass / this.height ** 2;
    return this.MBI;
  },
};
const john = {
  firstName: "john",
  lastName: "smith",
  mass: 92,
  height: 1.95,
  calcMBI: function () {
    this.MBI = this.mass / this.height ** 2;
    return this.MBI;
  },
};
if (mark.calcMBI() > john.calcMBI()) {
  console.log(
    `Mark's MBI (${mark.MBI}) is higher than John's MBI (${john.MBI})!`
  );
} else {
  console.log(
    `John's MBI (${john.MBI}) is higher than Mark's MBI (${mark.MBI})!`
  );
}
const evie = [
  "Evie",
  "221B",
  2022 - 2003,
  "student",
  ["sara", "saba", "shaghayegh"],
];
const types = [];
for (let i = 0; i < evie.length; i++) {
  // reding
  console.log(evie[i], typeof evie[i]);
  // writing:
  // types[i] = typeof evie[i];
  // or
  types.push(typeof evie[i]);
}
console.log(types);
console.log("----only string----");
for (let i = 0; i < evie.length; i++) {
  if (typeof evie[i] !== "string") continue;
  console.log(evie[i], typeof evie[i]);
}
console.log("----break whith number----");
for (let i = 0; i < evie.length; i++) {
  if (typeof evie[i] == "number") break;
  console.log(evie[i], typeof evie[i]);
}
console.log("1");
const evie = [
  "Evie",
  "221B",
  2022 - 2003,
  "student",
  ["sara", "saba", "shaghayegh"],
];
for (let i = evie.length - 1; i >= 0; i--) {
  console.log(evie[i]);
}
*/ 
// challenge#4
let sum = 0;
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
function calacAve(arr) {
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips[i] = calcTip(bills[i]);
  totals[i] = tips[i] + bills[i];
}
console.log(bills, tips, totals);
console.log("-----average-----");
console.log(calacAve(bills), calacAve(tips), calacAve(totals));
/*

*/

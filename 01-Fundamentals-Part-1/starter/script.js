// let js = "amazing";
// console.log("evie");

// let firstname = "evie";
// console.log(firstname);
// let PI = 3.1415;

// let javaScriptIsFun;
// console.log(typeof null);

// javaScriptIsFun = 3;
// console.log(typeof javaScriptIsFun);
// console.log(34 > 35);

// // challenge#1
// let markMass, johnMass;
// let markHeight, johnHeight;
// let markMBI, johnMBI;
// let markHigherMBI;
// // Data1:
// markMass = 78;
// markHeight = 1.69;

// johnMass = 92;
// johnHeight = 1.95;

// johnMBI = johnMass / johnHeight ** 2;
// markMBI = markMass / markHeight ** 2;

// markHigherMBI = markMBI > johnMBI;
// console.log(markMBI, johnMBI);
// console.log(markHigherMBI);
// // Data2:
// markMass = 95;
// markHeight = 1.88;

// johnMass = 85;
// johnHeight = 1.76;

// johnMBI = johnMass / johnHeight ** 2;
// markMBI = markMass / markHeight ** 2;

// markHigherMBI = markMBI > johnMBI;
// console.log(markMBI, johnMBI);
// console.log(markHigherMBI);

// const firstName = "evie";
// const job = "student";
// const birthYear = 2003;
// const year = 2023;

// let evie =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log("the first vesion :\n", evie);

// evie = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(
//   `the second version:
// `,
//   evie
// );

// // challenge#2
// let markMass, johnMass;
// let markHeight, johnHeight;
// let markMBI, johnMBI;
// // Data1:
// markMass = 78;
// markHeight = 1.69;

// johnMass = 92;
// johnHeight = 1.95;

// johnMBI = johnMass / johnHeight ** 2;
// markMBI = markMass / markHeight ** 2;

// if (markMBI > johnMBI) {
//   console.log(
//     `Mark's MBI (${markMBI}) is higher than John's MBI (${johnMBI})!`
//   );
// } else {
//   console.log(
//     `John's MBI (${johnMBI}) is higher than Mark's MBI (${markMBI})!`
//   );
// }

// // Data2:
// markMass = 95;
// markHeight = 1.88;

// johnMass = 85;
// johnHeight = 1.76;

// johnMBI = johnMass / johnHeight ** 2;
// markMBI = markMass / markHeight ** 2;

// if (markMBI > johnMBI) {
//   console.log(
//     `Mark's MBI (${markMBI}) is higher than John's MBI (${johnMBI})!`
//   );
// } else {
//   console.log(
//     `John's MBI (${johnMBI}) is higher than Mark's MBI (${markMBI})!`
//   );
// }

// const hasDriverLicense = true;
// const hasGoodvision = false;
// console.log(!hasDriverLicense);

// // challenge#3
// let k1, k2, k3; //koalas score
// let d1, d2, d3; //dolphins score
// let Kave, Dave; //teams score average
// // Data1
// d1 = 96;
// d2 = 108;
// d3 = 89;
// Dave = (d1 + d2 + d3) / 3;

// k1 = 88;
// k2 = 91;
// k3 = 110;
// Kave = (k1 + k2 + k3) / 3;

// if (Kave > Dave) {
//   console.log("Koala team is the winner!");
// } else if (Kave < Dave) {
//   console.log("Dolphin team is the winner!");
// } else {
//   console.log("Draw!");
// }
// // Data bounds1
// d1 = 97;
// d2 = 112;
// d3 = 101;
// Dave = (d1 + d2 + d3) / 3;

// k1 = 109;
// k2 = 95;
// k3 = 123;
// Kave = (k1 + k2 + k3) / 3;

// if (Kave > Dave && Kave >= 100) {
//   console.log("Koala team is the winner!");
// } else if (Kave < Dave && Dave >= 100) {
//   console.log("Dolphin team is the winner!");
// } else if (Kave === Dave) {
//   console.log("Draw!");
// }
// // Data bounds2
// d1 = 97;
// d2 = 112;
// d3 = 101;
// Dave = (d1 + d2 + d3) / 3;

// k1 = 109;
// k2 = 95;
// k3 = 106;
// Kave = (k1 + k2 + k3) / 3;

// if (Kave >= 100 && Dave >= 100) {
//   if (Kave > Dave) {
//     console.log("Koala team is the winner!");
//   } else if (Kave < Dave) {
//     console.log("Dolphin team is the winner!");
//   } else if (Kave === Dave) {
//     console.log("Draw!");
//   }
// } else if (Kave < 100 && Dave < 100) {
//   console.log("any of the teams is the winner!");
// }

// challeng#4
let bill;
let tip;

bill = Number(prompt("enter the bill pleas"));
tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total is ${bill + tip}.`
);
//test 275 . 40 . 430 for bill

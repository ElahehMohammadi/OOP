/*Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀*/
const calcAverageHumanAge = function (ages) {
  return ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
};
Data1 = [5, 2, 4, 1, 15, 8, 3];
Data2 = [16, 6, 10, 5, 6, 1, 4];
console.log('---------FIRST DATA TEST---------');
console.log(calcAverageHumanAge(Data1));
console.log('---------SECOND DATA TEST---------');
console.log(calcAverageHumanAge(Data2));

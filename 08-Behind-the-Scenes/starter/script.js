'use strict';
let lastName = 'william';
let oldLastName = lastName;
lastName = 'davis';
console.log(lastName, oldLastName);

const jessica = {
  firstname: 'jessica',
  lastname: 'william',
  age: 27,
};
const marriedjessica = jessica;
marriedjesica.lastName = 'davis';
console.log(jessica);
console.log(marriedjessica);

const jessica2 = {
  firstname: 'jessica',
  lastname: 'william',
  age: 27,
};
const jessicacopy = Object.assign({}, jessica2);
jessicacopy.lastname;

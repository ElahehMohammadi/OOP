// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*function maxCheck(max, current) {
  if (max >= current) return max;
  else return current;
}
function minCheck(min, current) {
  if (min <= current) return min;
  else return current;
}
function temp(arr) {
  let len = arr.length;
  let current;
  let min;
  let max;
  let i;
  for (i = 0; i < len; i++) {
    current = arr[i];
    if (typeof current == 'number') {
      min = current;
      max = current;
      break;
    }
  }
  for (let j = i + 1; j < len; j++) {
    current = arr[j];
    if (typeof current == 'number') {
      max = maxCheck(max, current);
      min = minCheck(min, current);
    }
  }
  return [max, min];
}
function two_arr(A1, A2) {
  let firstArr = temp(A1);
  let secondArr = temp(A2);
  let max = maxCheck(firstArr[0], secondArr[0]);
  let min = minCheck(firstArr[1], secondArr[1]);
  return max - min;
}
let A1 = [-1, -5, 9, -9, 3, 6, 'eror', 21, -22, 45, 78, 88];
let A2 = ['eror', 'error', 'eror', -9, 8, 99, 100, 5, -102, 'eror', 556, 52];

console.log(two_arr(A1, A2));*/
function printForecast(arr) {
  let str = `...`;
  for (let i = 0; i < arr.length; i++) {
    str += ` ${arr[i]}ºC in ${i + 1} days ...`;
  }
  console.log(str);
}
let data1 = [17, 21, 23];
let data2 = [12, 5, -5, 0, 4];
printForecast(data1);
printForecast(data2);

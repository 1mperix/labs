'use strict';

const ipAddress = '10.0.0.1'
const array = ipAddress.split('.')
  .map(el => parseInt(el, 10))
  .map((el, i) => el << 8 * (ipAddress.length - i - 1));
let sum = 0;
for(let key of array){
  sum += key;
}
console.log(sum);
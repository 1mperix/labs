'use strict';

const sum1 = (...args) => {
  let result = 0;
  for(let i = 0; i < args.length; i++){
    result += args[i];
  }
  return result;
}
const a = sum1(1, 2, 3) // a === 6
console.log(a);

const sum2 = (...args) => {
  let result = 0;
  for(const value of args){
    result += value;
  }
  return result;
}
const b = sum2(0) // b === 0
console.log(b);

const sum3 = (...args) => {
  let result = 0;
  let i = 0;
  while(i < args.length){
    result += args[i];
    i++;
  }
  return result;
}
const c = sum3() // c === 0
console.log(c);

const sum4 = (...args) => {
  let result = 0;
  let i = 0;
  do{
    result += args[i];
    i++;
  }while(i < args.length);
  return result;
}
const d = sum4(1, -1, 1) // d === 1
console.log(d);

const sum5 = (...args) => args.reduce((acc, el) => acc + el);
const e = sum5(10, -1, -1, -1) // e === 7
console.log(e);
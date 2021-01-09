'use strict';

function range(start, end){
  let array = [];
  for(let i = start; i <= end; i++){
    array.push(i);
  }
  return array;
}

console.log(range(15, 30));

const rangeOdd = (start, end) => range(start, end).filter(el => el % 2);
console.log(rangeOdd(15,30));
'use strict';

const pipe = (...fns) => x => {
  let result = x;
  for(const fn of fns){
   if(typeof fn !== 'function'){
     throw new Error('Value is not a function')
   }
   result = fn(result);
  }
 return result;
}

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = pipe(inc, twice, cube);
console.log(f(5));
const e = pipe(inc, inc);
console.log(e(7));
const d = pipe(inc, 7, cube);
console.log(d(3));



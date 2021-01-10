'use strict';

const max = args => {
  let maxEl = args[0][0];
  args.forEach(row => {
      row.forEach(el => {
        if(el > maxEl){
          maxEl = el;
        }
      });
    }
  )
  return maxEl;
}


const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m);
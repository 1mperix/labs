'use strict';

const iFace = {
  m1: x => [x],
  m2: function (x, y) {
  return [x, y];
},
  m3(x, y, z) {
  return [x, y, z];
}
}
const array = [];
for(const key in iFace){
  const value = iFace[key];
  if(typeof value === 'function'){
    array.push([key,value.length]);
  }
}
console.log(array);


'use strict';

const random = (min, max) => Math.floor(Math.random()*(max-min+1)+min);
console.log(random(2,5));

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
const generateKey = (length) => {
  let word = '';
  for(let i = 0; i < length; i++){
    word += characters[random(0, characters.length)];
  }
  return word;
}

console.log(generateKey(13));
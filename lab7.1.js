'use strict';

const removeElement = (arr,...item) => {
  for(const value of item){
    const index = arr.indexOf(value);
    if(index !== -1) arr.splice(index, 1);
  }
}

const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 3, 7, 5);
console.log(array);

/*const array = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElement(array, 'Lima'); // удалит 'Lima' из массива
removeElement(array, 'Berlin'); // не удалит ничего
console.log(array);*/
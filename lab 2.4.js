'use strict';

const fn = () => {
  const name = {
    name:'Dmytro',
  }
  let name2 = {
    name:'Kirill',
  }
  name.name = 'Luba';//значение свойства изменяеться
  name2.name = 'Marina';//значение свойства изменяеться
  // name = 25;не может измениться потому что const
  // name2 = 30;может потому что let
  console.log(name);
  console.log(name2);
}

fn();

const createUser = (name, city) => ({ name, city });
console.log(createUser('Marcus Aurelius', 'Roma'));


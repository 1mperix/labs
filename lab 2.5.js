const phonesBook = [
  {name: 'Marcus Aurelius', phone: '+380445554433'},
  {name: 'Lombard', phone: '+88005553535'},
]
const findPhoneByName = (name) => {
  for(let keyword of phonesBook){
    if (name === keyword.name){
      return keyword.phone;
    }
  }
  return 'This name is not defined';
}

console.log(findPhoneByName(`Marcus Aurelius`));

const hash = {
  'Marcus Aurelius': '+380445554433',
  'Lombard': '+88005553535',
}

const findPhoneByNameHash = (name) => hash[name];

console.log(findPhoneByNameHash('Lombard'));

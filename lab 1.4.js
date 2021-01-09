const array = ['salam', 200, true, 'Ukraine', false, -800];
const collection = {
  number: 0,
  string: 0,
  boolean: 0,
}
for(let key of array){
  if(typeof key === "string"){
    collection.string++;
  }else if (typeof key === "boolean"){
    collection.boolean++;
  }else{
    collection.number++;
  }
}
console.log(collection);
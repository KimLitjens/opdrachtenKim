let person = {};
person.name = "Bill Gates";
person.age = 64;
console.log(person); // output: { name: 'Bill Gates', age: 64 }
let billGates = person;
person.age = 50;
console.log(billGates);


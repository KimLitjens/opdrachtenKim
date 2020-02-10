//Object
var person = {name: "Kim", age: 29};
console.log(person.name);
console.log(person.age);
console.log(person["name"]);
console.log(person["age"]);
person.evaluations = [7, 10, 9];
console.log(person.evaluations);

//Arrays
var colors = ["Rood", "Wit", "Blauw"];
console.log(colors[0])
colors.push("oranje");
colors.push(5);
colors.push({greetings: "hi ik ben een object"});
console.log(colors[3]);
console.log(colors.length);
colors[1] = "Gelb";
console.log(colors[5]);

let objs = new Object();
//let objs = {};

let person = {
  name: "김팔팔",
  age: 88,
  hobbu: "달리기",
  job: "FE Developer",
  extra: {},
  10: 20,
  "like cat": true,
};

let name = person.name;
console.log(name);

let age = person["age"];
console.log(age);

let property = "hobby";
let hobby = person[property];
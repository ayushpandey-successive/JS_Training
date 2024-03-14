//Problem Statement : Find Error in below questions and rectify them

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// var person = Person("John Doe", 30);
// console.log(person.name);

//we need to create a new Person object using the new keyword
function Person(name, age) {
  this.name = name;
  this.age = age;
}
var person = new Person("John Doe", 30);
console.log(person.name);

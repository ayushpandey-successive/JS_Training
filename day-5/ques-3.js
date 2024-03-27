//Problem Statement: Write a program to remove all the id key from array of object ({name:"John", age:27, id:1})

const arr = [
  { name: "John", age: 27, id: 1 },
  { name: "peter", age: 14, id: 2 },
  { name: "Alice", age: 50, id: 3 },
  { name: "Bob", age: 30, id: 4 },
];

const removeid = (obj) => {
  for (let i = 0; i < obj.length; i++) {
    delete obj[i].id;
  }

  return obj;
};

console.log(removeid(arr));

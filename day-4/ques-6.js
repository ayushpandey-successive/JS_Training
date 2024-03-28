//Problem Statement: Write a program to find sum of an array

const sum = (arr) => {
  return arr.reduce((acc, val) => {
    return acc + val;
  }, 0);
};

console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

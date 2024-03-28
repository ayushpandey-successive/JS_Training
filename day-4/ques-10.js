//Problem Statement:  Write a program to concatenate an input of array of arrays

const concatArray = (arr) => {
  let arr2 = [];
  return arr2.concat(...arr);
};

console.log(
  concatArray([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

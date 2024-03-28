//Problem Statement:  Write a program to remove dupliacte elements from an array

const duplicateRemover = (arr) => {
  return [...new Set(arr)];
};

console.log(duplicateRemover([1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]));

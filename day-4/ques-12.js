//Problem Statement: Write a program to display intersection of two array

const intersection = (arr1, arr2) => {
  let arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      arr3.push(arr1[i]);
    }
  }
  return arr3;
};

console.log(
  intersection(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 34, 56, 23, 54],
    [, 23, 65, 14, 78, 341, 2, 3, 4, 5, 6, 7, 8, 9]
  )
);

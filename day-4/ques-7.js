//Problem Statement: Write a program to find index of duplicate elements in an array

const duplicateelements = (arr) => {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] == undefined) {
      obj[arr[i]] = [i];
    } else {
      obj[arr[i]].push(i);
    }
  }

  for (i in obj) {
    if (obj[i].length == 1) {
      delete obj[i];
    }
  }
  return obj;
};

console.log(duplicateelements([1, 2, 3, 1, 2, 3, 1, 2, 3, 4]));

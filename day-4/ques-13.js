//1Problem Statement: Write a program to return inverse of an array
//
const arr = [3, 4, 2, 0, 1];
const inverseArr = new Array(arr.length);

const makeInverseArray = (arr) => {
  for (i in arr) {
    inverseArr[arr[i]] = i;
  }
  return checkInverse(arr,inverseArr);
};

const checkInverse = (arr, inverseArr) => {
  for (i in arr) {
    if (arr[i] != inverseArr[i]) {
      console.log("The array is not inversible ");
      return false;
    }
  }
  return true;
};


if(makeInverseArray(arr))
{
  console.log("The array is reversible");
}
console.log(inverseArr);

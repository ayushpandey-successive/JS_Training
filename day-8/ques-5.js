//Problem Statement : Find Error in below questions and rectify them

// let myArray = [1, 2, 3, 4];
// for (let i = 0; i < myArray.length; i++) {
//    console.log(myArray[i]);
// }

// let myNumber = myArray[5];
// if (myNumber) {
//    console.log('The number is: ' + myNumber);
// } else {
//    console.log('The number is undefined');
// }

// Rectify code
// in accesing array elemnent we pass index value that is out of range so value will, be undefined.

let myArray = [1, 2, 3, 4];
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

let myNumber = myArray[3];
if (myNumber) {
  console.log("The number is: " + myNumber);
} else {
  console.log("The number is undefined");
}

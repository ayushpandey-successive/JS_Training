//Problem Statement:rite a program to print all even number first and then all odd numbers

const evenOdd = (n) => {
  let evenArr = [];
  let oddArr = [];
  for (let i = 1; i < n + 1; i++) {
    if (i % 2 == 0) {
      evenArr.push(i);
    }
  }
  for (let i = 1; i < n + 1; i++) {
    if (i % 2 != 0) {
      oddArr.push(i);
    }
  }
  console.log(evenArr);
  console.log(oddArr);
};

evenOdd(100);

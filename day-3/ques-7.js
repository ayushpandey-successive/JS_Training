//Problem Statement:Write a program to display the twice of a number starting from 2 and end at 4096 (2, 4, 8, 16, ..... 4096)

const arr = [];

const printNumber = (start, end) => {
  let i = start;
  while (i < end) {
    arr.push(i);
    i = i * 2;
  }
  console.log(arr);
};

printNumber(2, 4096);

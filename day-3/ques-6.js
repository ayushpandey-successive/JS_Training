//Problem Statement:Write a program to display prime numbers from 1 to 50

let arr = [];
const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  arr.push(num);
};

for (let i = 1; i < 51; i++) {
  if (i != 1) {
    isPrime(i);
  }
}

console.log(arr);

//Problem Statement: Give an example of using multiple callback functions in a single function in JavaScript

const calculator = (add, sub, multiply, divide, a, b) => {
  console.log(a, b);
  return [add(a, b), sub(a, b), multiply(a, b), divide(a, b)];
};

const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a * b;
};
const divide = (a, b) => {
  return a / b;
};

//console.log(calculator(add,sub,multiply,divide,10,20));
const a1 = 10;
const b1 = 20;

const [a, b, c, d] = calculator(add, sub, multiply, divide, a1, b1);

console.log(
  `sum of ${a1} ,${b1} is ${a} , subtraction of ${a1}, ${b1} is ${b} , multiplication of ${a1} ,${b1} is ${c} , division of ${a1} ,${b1} is ${d}`
);

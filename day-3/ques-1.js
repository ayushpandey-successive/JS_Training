//Problem Statement:Write a program to perform functionality of a calculator (add,sub,multiply,divide)

const calculator = (a, b, operator) => {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return 0;
  }
};

console.log(calculator(21, 3, "+"));
console.log(calculator(24, 13, "-"));
console.log(calculator(52, 36, "*"));
console.log(calculator(21, 3, "/"));

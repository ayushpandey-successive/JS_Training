//Problem Statement:Write a program to perform functionality of a calculator (add,sub,multiply,divide)

const calc = (a, b, op) => {
  if (op == "+") {
    return a + b;
  }
  if (op == "-") {
    return a - b;
  }
  if (op == "*") {
    return a * b;
  }
  if (op == "/") {
    return a / b;
  }
};

console.log(calc(21, 3, "+"));
console.log(calc(24, 13, "-"));
console.log(calc(52, 36, "*"));
console.log(calc(21, 3, "/"));

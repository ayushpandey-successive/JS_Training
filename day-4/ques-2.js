//Problem Statement: Write a program to reverse a string ("Hello John" => "olleH nhoJ")

const reverseString = (s) => {
  let splitstring = s.split(" ");
  for (let i = 0; i < splitstring.length; i++) {
    splitstring[i] = splitstring[i].split("").reverse().join("");
  }
  return splitstring.join(" ");
};

console.log(reverseString("Hello John"));

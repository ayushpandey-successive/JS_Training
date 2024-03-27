//Problem Statement: Write a program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw")

const str = "Hello Yellow";
const str1 = str.split("");
let str2 = [];
str1.map((ele)=>{
  if (str2.indexOf(ele) == -1) {
    str2.push(ele);
  }
})

console.log(str2.join(""));

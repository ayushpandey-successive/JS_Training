//1. Write a program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw")


let str = "Hello Yellow";
let str1 = str.split("");
//console.log(str1 );
let str2 = [];
for(let i=0;i<str1.length;i++)
{
    if(str2.indexOf(str1[i])==-1)
    {
        str2.push(str1[i]);
    }
}
console.log(str2.join(""));
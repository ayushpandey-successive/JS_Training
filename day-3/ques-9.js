//Write a program to print fibonaaci series

let arr=[]
const fibonacci=(num) =>{
    let num1 = 0;
    
    let num2 = 1;
    let sum;
    let i = 0;
    for (i = 0; i < num; i++) {
        sum = num1 + num2;
        arr.push(sum);
        num1 = num2;
        num2 = sum;
    }
    //return num2;
}
arr.push(0)
arr.push(1)

fibonacci(10)

console.log(arr);
 

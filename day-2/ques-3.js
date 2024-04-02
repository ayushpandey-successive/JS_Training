// Write a function expression that takes in another function as an argument

let sum=(a,b)=>a+b;

let average=(a,b,sum)=>{
    let s=sum(a,b);
    return s/2;
}

console.log(average(1,20,sum))
//7.Problem Statement:  All of the above questions from 3-6 needs to be done with arrow functions also

////////////////////////////////
//question 3

const sum=(a,b)=>a+b;
const average=(a,b,sum)=>{
    let s=sum(a,b);
    return s/2;
}
console.log(average(1,2,sum))


////////////////////////////////

//question 4

const squareofnumber = (a)=> a*a;
console.log(squareofnumber(5))

////////////////////////////////
//question 5
const sum1=(a,b)=>a+b;
console.log(sum1(10,9))

////////////////////////////////

//question 6

const isEven=(a)=>a%2===0;
console.log(isEven(7))
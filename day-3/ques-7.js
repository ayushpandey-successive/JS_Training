//Write a program to display the twice of a number starting from 2 and end at 4096 (2, 4, 8, 16, ..... 4096)



let arr=[];



const printnumber=()=>{
    let i=2;
while(i<4097)
{ 
    arr.push(i);
    i=i*2;
    
}
console.log(arr);
}


printnumber();

//5. Write a program to print all even number first and then all odd numbers using only one iteration

const evenodd=(n)=>{
    let evenarr=[];
    let oddarr=[];
    for(let i = 1; i <n+1;i++)
    {
        if(i%2==0)
        {
            evenarr.push(i);
        }
        if(i%2!=0)
        {
            oddarr.push(i);
        }
    }
    
    console.log(evenarr);
    console.log(oddarr);
}

evenodd(100);
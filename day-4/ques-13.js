//13. Write a program to return inverse of an array

const inverse=(arr)=>{
    for(let i=0;i<=arr.length/2;i++)
    {
        let temp=arr[i];
        arr[i]=arr[arr.length-i-1];
        arr[arr.length-i-1]=temp;
    }
    return arr;
}

console.log(inverse([1, 2, 3, 4, 5, 6, 7, 8, 9,11,34,56,23,54]));
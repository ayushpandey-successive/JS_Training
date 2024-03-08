//1. Write a program to iterate over object.
const obj={
    a:1,
    b:2,
    c:3,
    d:4,
}

const objectiterator=()=>{
    for(const key in obj){
        value=obj[key];
        console.log(`key:${key} Value${value}`)
    }
}


objectiterator();
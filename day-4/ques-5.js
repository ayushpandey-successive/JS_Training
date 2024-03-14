//Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)

const camelCase=(s)=>{
    let splitstring = s.split(" ");
    let ans=splitstring[0];

    for(let i=1; i<splitstring.length;i++)
    {
        ans+=splitstring[i][0].toUpperCase()+splitstring[i].substring(1);
    }
    return ans;
}


console.log(camelCase("hello john doe"));
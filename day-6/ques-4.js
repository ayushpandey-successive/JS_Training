/*4. Create a class called `Person` that has properties for `firstName`, `lastName`, and `age`. The class should also have a method called `fullName` that returns the person's full name.
Additionally, the class should have a method called `averageAge` that takes in an array of `Person` objects and returns the average age of all the people in the array.*/

class Person{
    constructor(firstname,lastname,age)
    {
        this.firstname=firstname
        this.lastname=lastname
        this.age=age
    }

    fullName()
    {
        return `Fullname is ${this.firstname} ${this.lastname}`;
    }

    static averageAge(...obj)
    {
        
        let sum=0;
        for(let i=0;i<obj.length;i++)
        {
            
            sum+=obj[i].age;
        }
        
        return sum/obj.length;
    }

}

const person1= new Person("Ayush","Pandey",21);
const person2= new Person("Anant","Mishra",25);
const person3= new Person("Udit","Pratap",51);
const person4= new Person("Abhishek","Pandey",12);
const person5= new Person("Ayush1","Pandey",29);

console.log(person1.fullName());

const averageage=Person.averageAge(person1,person2,person3,person4,person5);

console.log(`Average age is ${averageage}`)
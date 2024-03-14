// 3.1Create a class Person with properties name, age, gender, and interests. Add a method greeting() that returns a string introducing the person. Also add a method farewell() that returns a string saying goodbye to the person.
//3.2 Create a class Student that inherits from the Person class and has a property studies. Override the greeting() method to include information about what the student is studying.
//3.3 Create a class Teacher that inherits from the Person class and has a property subjectsTaught. Override the farewell() method to include information about what the teacher teaches.

class Person {
    constructor(name, age, gender, interests) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    greeting() {
        return `Hello,${this.name}`;
    }

    farewell() {
        return `Goodbye,${this.name}`;
    }
}

class Student extends Person {
    constructor(name, age, gender, interests, studies) {
        super(name, age, gender, interests);
        this.studies = studies;
    }
    greeting() {
        return `My name is ${this.name} and I am studying ${this.studies}`;

    }
}

class Teacher extends Person {

    constructor(name, age, gender, interests, subjectsTaught) {
        super(name, age, gender, interests);
        this.subjectsTaught = subjectsTaught;
    }
    farewell() {
        return `${this.name} teachs ${this.subjectsTaught}`;

    }
}

const person1 = new Person("Ayush", 25, "Male", "Table Tennis");
console.log(person1.greeting());
console.log(person1.farewell());

const student1 = new Student("Parth", 25, "Male", "Table Tennis", "Maths");
console.log(student1.greeting());
console.log(student1.farewell());


const teacher1 = new Teacher("Shikhar", 25, "Male", "Table Tennis", "Maths");
console.log(teacher1.greeting());
console.log(teacher1.farewell());

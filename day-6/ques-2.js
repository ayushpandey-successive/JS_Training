//2. Create a class Shape with properties width and height and methods getArea(). Create two classes Rectangle and Triangle that inherit from the Shape class and implement the getArea() method for their respective shapes.


class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

};
class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height);
    }
    getArea(){
        return this.width * this.height;
    }

}


class Triangle extends Shape {
    constructor(width, height) {
        super(width, height);
    }
    getArea(){
        return (this.width * this.height) / 2;
    }
};


const rectangle=new Rectangle(10,50);
console.log(`Area of Rectangle is ${rectangle.getArea()}`);

const triangle=new Triangle(10,50);
console.log(`Area of triangle is ${triangle.getArea()}`);
'use strict'
/* 
Object-oriented programming
class: template
object: instance of a class 
JavaScript classes
- introduced in ES6
- syntactical sugar over prototype-based inheritance 

1. Class declarations  */
class Person {
    //constructor 
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 21);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();


// 2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }


    get age() {
        return this._age;
    }

    set age(value) {
        // if (value < 0) {
        //     throw Error('age can not be negative');   
        // }
        this._age = value < 0 ? 0 : value; //Ternary operator
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

//privae == incapsulation

// 3. Fields (public, private)
// Too soon! 지금은 (2022) 사용 가능
class Experiment {
    publicField = 2; // 생성자를 쓰지 않고 필드정의가능, 그냥 정의 퍼블릭
    #privateField = 0; // # 붙이면 프라이빗, 즉 클래스 외부에서 읽기 변경 불가능
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); // undefined



// 4. Static properties and methods
// Too soon! 지금은 (2022) 사용 가능
// object, 들어오는 데이터에 상관없이 공통적으로 클래스에서 쓸 수 있는 것에 쓰면 메모리 사용 최소화에 좋음.
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1); //출력안됨
Article.printPublisher();




// 5. Inheritance 상속 다양성
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        console.log(`drawing ${this.color} color of`)
    }
    getArea() {
        return this.width * this.height
    }
}

class Rectangle extends Shape {} // extends 연장한다는 키워드만 써주면 shape에 있는 모든것들이 포함 됨
class Triangle extends Shape {
    draw() {//부모함수 (밑에꺼) 안써주면 재정의한 함수만 호출
        super.draw(); // 부모의 드로우 함수 호출
        console.log('▲'); 
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
} // 필요한 함수들만 오버라이딩해서 작성

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());


//6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); // object instanceOf class
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);









// class는 fields(속성)와 method(행동)로 구성되어 있다
// 관련성이 있는 속성과 행동을 모듈화 한 것.
// 캡슐화, 상속, 다형성 가능, 즉 객체지향 가능

//class
// 붕어빵을 만들 수 있는 틀, 설계도
// template, declare once, no data in

//object: 팥붕어빵 class에 실제 데이터를 넣어서 만든것
//메모리에 올라가게 됨
//instance of a class, created many times, data in (팥 붕어빵, 피자 붕어빵)

'use strict';
//Object-oriented programming
//class: template
//object: instance of a class
//JavaScript classes
// -introduced in ES6
// -syntactical sugar over prototype-based ingeritance

// 1. Class declarations
class Person {
    //constructor
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

//object생성 new 사용
const ellie = new Person('ellie',20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lasgName = lastName;
        this.age = age;
    }

    //getter를 정의하는 순간 위의 this.age는 메모리의 값을 가져오는 것이아니라
    //getter를 호출하게된다
    get age() {
        return this._age;
    }

    //setter를 정의하는 순간 위의 = age;는 메모리의 값을 할당하는 것이 아니라
    //setter를 호출하게됨  즉, 전달받은 value를 this.age에 할당할때
    //메모리의 값을 업데이트하는 것이아니라 setter를 호출해 무한정 반복하게된다
    //따라서 getter와 setter의 변수명은 다르게 한다
    set age(value) {
        // if(value<0){
        //     throw Error('age can not be negative');
        // }

        this._age = value <0 ? 0 : value;

       // this._age= value;
    }
}

const user1 = new User('Steve','Job',-1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
// httpsz;//developer.mozilla.org/en-US/docs/Web/JavaScript/Refe

class Experiment {
    publicField = 2; //생성자 없이 필드선언시 public
    #privateField = 0; //#사용시 클래스내부에서만 사용가능한 private
}
const Experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
//오브젝트 생성시 각자 다른 값을 갖게되는데
//오브젝트에 상관없이 같은 값과 같은 메소드를 갖게 할때 사용
//메모리의 사용을 줄일 수 있다.
// Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); //undefined
console.log(Article.publisher); //클래스 고유의 값
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea(){
        return width * this.height;
    }
}

//Shape상속받음
class Rectangle extends Shape{}
class Triangle extends Shape{
    //출력을 다르게 하고싶을때도 오버라이딩 한다.
    draw(){
        super.draw(); //부모의 draw메소드 호출
        console.log('^');
    }

    //삼각형의 경우 넓이 구하는 공식이 다르기때문에 오버라이드한다.
    getArea(){
        return (this.width * this.height)/2;
    }

    toString(){
        return `Triangle: color: ${this.color}`;
    }
}

//상속 받았기 때문에 Rectangle생성시 Shape의 필드와 메소드 사용가능
const retangle =  new Rectangle(20, 20, 'blue');
Rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea()); 

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());


//MDN JavaScript reference 에서 Built-in 메소드 확인가능
//mdn object 참고
//Objects
//one of the JavaScript's data types.
//a collection of related data and/or functionality.
//Nearly all objects in JavaScript are instances of Object
//object = {key: value};

// 1. Literals and properties
//const name = 'ellie';
//const age = 4;
//print(name, age);
function print(person){
    console.log(person.name);
    console.log(person.age);
}

//값이 늘어나면 관리가 힘들어진다.
//따라서 object를 사용한다
const ellie = {name: 'ellie', age: 4};
print(ellie);

//object 생성방법
const obj1 = {}; //'object literal' syntax
const obj2 = new Object(); //object constructor' syntax

//JS는 동적으로 타입이 런타임때 결정된다
//with JavaScript magic (dynamically typed language)
//can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

//can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);

//2. Computed properties
//key should be always stirng
console.log(ellie.name); //코딩하는 그 순간 키에 해당하는 값을 받아오고 싶을때 사용
console.log(ellie['name']) //<- Computed properties ,위와 같은 의미 반드시 스트링타입으로지정
//어떤키가 필요한지 모를때 runtime에서 결정될때 Computed properties사용(실시간으로 원하는키받기)
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key){
    console.log(obj.key);
}
printValue(ellie,'name'); //undefined

function printValue(obj, key){
    console.log(obj[key]); //<--[]사용 방법
}
printValue(ellie,'name'); //ellie
printValue(ellie,'age'); //4

//3. Property value shorthand
//생성자와 비슷하게 함수의 args를 객체로 반환해주는 방법
//class가 없는 경우 사용되었던 방법이다.
//통상 이와같은 방법의 함수는 함수명에 첫글자를 대문자로 한다 
const person1 = {name:'bob', age: 2};
const person2 = {name:'steve', age: 3};
const person3 = {name:'dave', age: 4};
const person4 = makePerson('elile',30)
//Object처럼 사용하는 방법도 있다
const person5 = new Person('elile',30)

function makePerson(name, age){
    return {
        name: name,  //name만 써도 가능
        age: age,   //age만 써도 가능
    };
}

// 4. Constructor function
function Person(name, age){
    //this ={}; 생략
    this.name = name;
    this.age = age;
    //return this; 생략
}


// 5. in operator: property existence check (key in obj)
console.log('name' in ellie); //true
console.log('age' in ellie); //true
console.log('random' in ellie); //false
console.log(ellie.random); //undefined

// 6. for..in vs for..of
//for (key in obj)
console.clear();
//ellie 가지고 있는 키들이 블럭을 돌때마다 key에 할당된다
for (key in ellie){
    console.log(key);
}

//for (value of iterable)
const array = [1, 2, 4, 5];
for(let i = 0; i < array.length ; i++){
    console.log(array[i]);
}

for(value of array){
    console.log(value); // 위와 같은 방법
}


// 7. Fun cloning
//Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'ellie', age: '20'}; //user는 ref를 통해 object값을 가져온다
const user2 = user; //user2도 user와 같은 ref를 가리킨다
user2.name='coder';
console.log(user); //name: coder
//즉 위의 방법은 복제가 아니다

//old way
const user3 = {};
for (key in user){
    user3[key]=user[key];
}
console.log(user3);


const user4={}
Object.assign(user4,user);
console.log(user4);
//또는 아래와 같이 축약해서 사용가능
const user5 = Object.assign({}, user);
console.log(user4);

//another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);// 뒤에있는것이 앞에있는 것을 덮어 씌운다
console.log(mixed.color);
console.log(mixed.size);
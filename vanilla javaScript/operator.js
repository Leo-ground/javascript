'use strict';
//1. String concatenation
console.log('my'+' cat'); //my cat
console.log('1'+2); // 12
console.log(`string literals: 1+2 = ${1 + 2}`); //3

//2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); //exponetiation

//3. Increment and decrement operatiors
let counter = 2;
const preIncrement = ++counter;
//counter  = counter + 1 ;
//preIncrement = counter ;

const postIncrement = counter++;
//postIncrement = counter;
//counter = counter + 1;

//4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

//5. Comparison operators
console.log(10<6) //less than
console.log(10<=6) // less than or equal
console.log(10>6)  //greater than
console.log(10>=6)  //greater than or equal

//6.Logical operaors: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// ||(or) 하나만 true면 결과가 true이기 때문에
//앞쪽에서 true면 check()를 사용하지 않는다
//즉 simple한 연산을 앞쪽으로 배치하고 
//무거운 연산은 제일 뒤쪽으로 배치한다
console.log(`or: ${value1 || value2 || check()}`);

// &&(and), finds the first falsy value
//배치순서는 or와 마찬가지이다
console.log(`and: ${value1 && value2 && check()}`);

//often used to compress long if-statement
//nullableObject && nullableObject.something
if(nullableObject != null){
    nullableObject.something;
}

function check(){
    for (let i =0; i<10; i++){
        //wasting time
        console.log('###');
    }
    return true;
}

//!(not)
console.log(!value1); //false

//7.Equality
const stringFive = '5';
const numberFive = 5;

//== loose equality, with type conversion
console.log(stringFive == numberFive); //true
console.log(stringFive != numberFive); //false

//==strict equality, no type conversion
console.log(stringFive === numberFive); //false
console.log(stiringFive !== numberFive); //true


//object equality by reference
//object타입을 ref를 통해 메모리에 값을 저장
//따라서  다른 ref를 가리킨다

const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1; //ellies1의 ref를 가리킨다
console.log(ellie1 == ellie2); //false
console.log(ellie1 === ellie2); //false
console.log(ellie1 === ellie3); //true

//equality - puzzler 
console.log(0==false); //true
console.log(0=== false); //false
console.log(''==false); //true
console.log(''===false); //false
console.log(null == undefined); //true (null, undefied = false)
console.log(null === undefined); //false

//8. Conditional operators: if
//if, else if, else
const name = 'ellie';
//const name = 'coder';
//const name = 'iii';
if(name === 'ellie'){
    console.log('Welcome, Ellie:');
}else if (name ==='coder'){
    console.log('You are amazing coder');
}else {
    console.log('unknown');
}

//9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');
//간단할 경우에만 사용하는 것이 좋다

//10. Switch statement
//use for multiple if checks
//use for enum-like value check
//use for multiple type checks in TS
//if else를 반복하거나 
//typescript에서 특정 타입 검사나 enum타입검사시
//사용하면 좋다

const browser = 'IE';
switch (browser){
    case 'IE':
        console.log('go away!');
        break;
    //동일한구문일 경우붙여서 사용가능
    case 'Chrome': 
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}


//11. Loops
//while loop, while the condition is truthy,
//body code is executed.
let i = 3;
while(i > 0){
    console.log(`while: ${i}`);
    i--;
}

//do while loop, body code is executed first,
//then check the condition.
do{
    console.log(`do while: ${i}`);
    i--;
}while (i > 0);


//for loop, for(begin; condition; step)
for(i=3; i>0; i--){
    console.log(`for: ${i}`);
}

for (let i = 3; i>0; i = i - 2){
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

//nested loops
for(let i = 0 ; i < 10; i++){
    for(let j = 0; j < 10; j++){
        console.log(`i: ${i}, j:${j}`);
    }
}

//break(stop), continue(다음step으로 넘어가기)
//Q1. iterate from 0 to 10 and print only even
// numbers (use continue)
for(let i= 0; i<11; i++){
    if(i%2 !== 0){
        continue;        
    }else{
        console.log(`value: ${i}`);
    }
}


//Q2. iterate from 0 to 10 and print numbers until
//reaching 8 (use break)

for(let i=0; i<11; i++){
    if(i>8){
        break;
    }
    console.log(`value: ${i}`);
}
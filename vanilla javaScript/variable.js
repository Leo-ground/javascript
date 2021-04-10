//JavaScript is very flexible
//flexible ===dangerous
//1.Use Strict
// added ECMAScript 5
//use this for valira Javascript.
'use strict';

//2.Variable
//let (added in ES6)

let name = 'ellie'; //선언
console.log(name);
name = 'hello'; //변수 재설정
console.log(name); 

{
    let name1 = 'ellie'; 
    console.log(name1);
    name1 = 'hello'; 
    console.log(nam1e); 

} //블록 설정시 블록내의 변수(let으로 선언시)
  //블록 밖에서 사용 불가
  console.log(name1);

let globalName='globa name';
console.log(globalName); //변수 어디에서든 접근가능

//JavaScript에서 사용하는 변수는 let뿐이다
//ES6전에는 var를 사용했지만 이제는 사용하면 안된다
//var를 사용하면 선언하기전에 초기화 할 수 있으며
//사용할 수 있다 즉 블록내에 선언해도 바깥에서 호출됨
//(호이스팅: 변수를 어디에서 선언해도 제일 위쪽으로 끌어올려서 사용한다)
//하지만 let사용시 이와같은 상황에서
//오류를 발생해 잡아준다

console.log(age);  //undefined
age =4;
console.log(age); //4
var age;

//ES6로 개발후 익스플로러 배포시 BABEL로 버전 조절후 배포

//3.Contants
//favor immutable data type always for a few reasons:
//-security
//-thread safety
//-reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;
//즉, mutable data type =>let
//  immutable data type =>const



//4. Variable types
//primitive, single item: number, string, boolean,
//                        null, undefined,symbol
//object, box container(single item을 묶어서 관리)
//function, first-class function <- 함수를 변수처럼 관리가능

const count = 17; //integer
const size = 17.1; //decimal number

console.log(`value: ${count},type:${typeof count}`);
console.log(`value: ${size},type:${typeof size}`);


//number - special numeric values:
//    infinity,-infinity, NaN
const infinity = 1/0;
const negativeInfinity= -1/0;
const nAn = 'not a number' /2 ;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt (fairly new, don't use it yet)
const bigInt = 12312312312312312312312312312123123123123123123123n; // over(-2**53~2**53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

//string
const char = 'c';
const brendan = 'brendan';
const greeeting = 'hello '+brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${gelloBob}, type:${typeof helloBob}`);


//boolean
//false: 0, null, undefined, NaN, ''
//true: any other value
const canRead = true;
const test = 3<1 //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects
//map또는 자료구조에서 고유한 식별자가 필요하거나
//동시에 다발적으로 발생하는 상황에서 고유한 값이 
//필요할때 사용 String으로 사용하면 동일한 문자일 경우
//다른 곳에서도 동일하게 처리되지만 Symbol은 다르게 처리

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false

//동일하게 만들고 싶을경우
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 ===gSymbol2); //true

//symbol은 바로 출력시 에러 발생 
console.log(`value: ${symbol1}, type: ${typeof symbol1}`);
//따라서 .description을 사용해 string으로 출력
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

//object, real-life object, data structure
const ellie = {name: 'ellie', age: 20};
ellie.age =21;

//5.Dynamic typing: dynamically typed language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
//string

text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
//number

text ='7'+5 ;
console.log(`value: ${text}, type: ${typeof text}`);
//string  75

text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
//number 4
console.log(text.charAt(0)); //에러발생
//이러한 런타임 에러를 줄이기 위해 typeScript를 사용



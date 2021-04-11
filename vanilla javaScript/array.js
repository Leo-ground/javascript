//자료구조와 알고리즘: 삽입, 검색, 삭제, 정렬 효율성을 공부하는 것
'use strict';

//Array 

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); //apple
console.log(fruits[1]); //banana
console.log(fruits[2]); //undefined
console.log(fruits[fruits.length-1]); //통상 마지막인덱스를 표시할때 사용

// 3. Looping over an array
// print all fruits

// a. for
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits){
    console.log(fruit);
}

// c. forEach
// forEach는 콜백함수로 value, index, array를 반환한다
// fruits.forEach(function (fruit, index, array){
//     console.log(fruit, index, array);
// })

fruits.forEach((fruit) => console.log(fruit, index, array));


// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('mango','peach');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the begining
fruits.unshift('lemon','kiwi');
console.log(fruits);

// shift: remove an item from the beginging
fruits.shift();
fruits.shift();
console.log(fruits);

//note!! shift, unshift are slower than pop, push
//unshift의 경우 추가적인 메모리공간으로 기존 값을 옮기고 새 값을 빈공간에 넣고
//shift의 경우 제일 앞의 값을 지우고 기존의 값을 앞쪽으로 이동시키기 때문에 오래걸린다

// splice: remove an item by index position
fruits.push('blueberry','lemon','kiwi');
console.log(fruits);
//splice(1,)시 나타나는 설명에 파라미터에 ?가 붙은경우 optional의 의미이다.
fruits.splice(1,1);
console.log(fruits);
console.log(1,1,'pineapple','watermelon');
console.log(fruits);

// combine two arrays
const fruits2 = ['pear','coconut'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('apple')); // index
console.log(fruits.indexOf('watermelon')); //index
console.log(fruits.indexof('bubumelon')); // -1

// includes
console.log(fruits.includes('apple')); //true
console.log(fruits.includes('bubumelon')); //false

// lastIndexof
console.clear();
fruits.push('apple')
console.clear(fruits);
console.log(fruits.indexOf('apple')); //앞쪽 index
console.log(fruits.lastIndexOf('apple')); //뒤쪽 index

//과제 array API문서 읽어보기





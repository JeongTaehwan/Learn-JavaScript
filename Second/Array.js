'use strict';

// Array

// 배열 선언

const arr1 = new Array();
const arr = [1, 2];

// 인덱스 포지션

const fruit = ['apple', 'banana'];
console.log(fruit);
console.log(fruit.length);
console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[fruit.length - 1]);

// 반복 배열


// for of

for(let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}

// for (let fruit of fruit) {
//     console.log(fruit);
// }

// for each

fruit.forEach((fruit) => console.log(fruit));

// add delete copy

//add
fruit.push('strawberry','watermelon','mango'); //index 뒤에서 3개 추가
console.log(fruit);

//delete
fruit.pop(); //index 뒤에서 1개 삭제
console.log(fruit);

//unshift
fruit.unshift('watermelon'); //index 앞에서 1개 추가
console.log(fruit);

//shift
fruit.shift(); //index 앞에서 1개 삭제
fruit.shift();
console.log(fruit);

//splice
fruit.push('watermelon', 'peach', 'mango'); //index 뒤에서부터 3개 추가
console.log(fruit);

fruit.splice(1, 1); //index 1번방의 값부터 1개를 지움
console.log(fruit);

fruit.splice(1, 1, 'grape', 'orange'); //index값 지운후 새로운 값 추가
console.log(fruit);

// 2개의 배열 섞기 가능
const fruits2 = ['mango', 'candy'];
const newFruit = fruit.concat(fruits2);
console.log(newFruit);

// 검사

console.clear();

//indexOf
console.log(fruit);
console.log(fruit.indexOf('banana'));

// includes
console.log(fruit.includes('watermelon'));
console.log(fruit.includes('coconut'));

//lastIndexOf

fruit.push('banana');
console.log(fruit);
console.log(fruit.indexOf('banana'));
console.log(fruit.lastIndexOf('banana'));
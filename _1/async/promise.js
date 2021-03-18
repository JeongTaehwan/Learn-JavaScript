'use strict';

// 프로미스는 자바스크립트 내장 오브젝트
// 비동기적인 것을 수행할 때 콜백함수 대신 유용하게 쓸 수 있음

//state: 수행중일땐 pending -> 성공적으로 마치면 fulfilled 문제가 생기면 rejected
//Producer vs Consumer

//1. Producer
// 새로운 프로미스가 만들어질땐 우리가 만든 executor라는 함수가 바로 실행
const promise = new Promise((resolve, reject) => {
    console.log('doing something...');
    setTimeout(() => {
         resolve('End of Work!');
        // reject(new Error('No network')); //reject는 보통 Error오브젝트를 사용함.
    },2000);
});

//2. Consumers: then, catch, finally

promise
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => { //성공하든 실패하든 호출됨
        console.log('Finally go home');
    });

//3. Promise Chaining
 
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));

//4. Promise Chaining 오류 처리 (Error Handling)
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓Tottenham'), 1000);
    });

const getEgg = hen => 
    new Promise((resolve, reject) => {
        // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
        setTimeout(() => reject(new Error(`${hen} => 🥚`)), 1000);
    });

const cook = egg => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

getHen()
.then(getEgg) // 한 가지만 받아 그대로 전달하는 경우 괄호안을 (getEgg)로 생략가능
.catch(error => {
    return '🍗';
})
.then(cook)
.then(console.log)
.catch(console.log);
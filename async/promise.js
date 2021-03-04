'use strict';

// 프로미스는 자바스크립트 내장 오브젝트
// 비동기적인 것을 수행할 때 콜백함수 대신 유용하게 쓸 수 있음

//state: 수행중일땐 pending 성공적으로 마치면 fulfilled 문제가 생기면 rejected
//Producer vs Consumer

//1. Producer
// 새로운 프로미스가 만들어질땐 우리가 만든 executor라는 함수가 바로 실행
const promise = new Promise((resolve, reject) => {
    console.log('doing something...');
    setTimeout(() => {
        // resolve('Puwan');
        reject(new Error('No network'));
    },2000);
});

//2. Consumers

promise
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    });
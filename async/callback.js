'use strict';

//동기 비동기
//hoisting: var,함수 선언 등이 자동적으로 제일 위로 올라가는 것

console.log('1');
setTimeout(() => console.log('2'), 1000); 
console.log('3');

// 콜백 마지막 정리

//즉각
function printImmediately(print) {
    print();
}

printImmediately(() => console.log('hello'));

function prinWithDelay(print, timeout) {

}
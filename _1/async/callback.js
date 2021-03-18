'use strict';

//동기 비동기
//hoisting: var,함수 선언 등이 자동적으로 제일 위로 올라가는 것

//동기
console.log('1');
console.log('2');
console.log('3');

console.log('1');
setTimeout(() => console.log('2'), 1000); 
console.log('3');

//즉각
function printImmediately(print) {
    print();
}

printImmediately(() => console.log('hello'));

//비동기 CallBack
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printWithDelay(() => console.log('async callback'), 2000);

//콜백지옥 예제 🤬

class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'Puwan' && password === 'Taehwan') ||
                (id === 'coder' && password === 'good')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not Found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if(user === 'Puwan') {
                onSuccess({ name: 'Puwan', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('이름을 입력하세요');
const password = prompt('비밀번호를 입력하세요');

userStorage.loginUser(
    id, 
    password, 
    user => {
        userStorage.getRoles(
            user, 
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {console.log(error)}
);
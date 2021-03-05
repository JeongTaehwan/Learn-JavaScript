// 깔끔하게 Promise를 사용하는 방법

'use strict';

//1. async

async function fetchUser() {

    return 'Puwan';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

//2. await (async가 붙은 함수안에서만 사용가능)

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

async function pickFruit() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;

    return `${apple} + ${banana}`;
}

pickFruit().then(console.log);

//5. 유용한 Promise API

function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + ')
    );
}

pickAllFruits().then(console.log);

function PickOnlyone() {
    return Promise.race([getApple(),getBanana()]);
}

PickOnlyone().then(console.log);
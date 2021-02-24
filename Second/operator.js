console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

let counter = 2;
const preIncrement = ++counter;
console.log(counter);
const postIncremet = counter++;
console.log(counter);

console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

const value1 = true;
const value2 = 4 < 2;

console.log(`or: ${value1 || value2 || check()}`);
console.log(`and: ${value1 || value2 || check()}`);

function check() {
    for (let i = 0; i < 10; i++){
        console.log('boom');
    }

    return true;
}

console.log(!value1);

const stringFive = '5';
const numberFive = 5;

console.log(stringFive == numberFive);

//if else if else

const name = 'Puwan';
if(name === 'Puwan') {
    console.log('Hi puwan!');
} else if(name === 'aran') {
    console.log('Maplestory is the worst game of the world');
} else {
    console.log('Who are you!?!?');
}
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

// Ternary

console.log(name === 'Puwan' ? 'yes' : 'no'); 

//Switch

const browser = 'FireFox';

switch(browser){
    case 'IE':
        console.log('Go way!');
        break;
    case 'FireFox':
    case 'Chrome':
    case 'Safari':
        console.log('Hi everyone!');
        break;
}

// Loops

// While

let i = 3;
while (i > 0){
    console.log(`while: ${i}`);
    i--;
}

// Do while

let j = 5;
do {
    console.log(`do while: ${j}`);
    j--;
} while(j > 0)

// For

for(let i = 3; i > 0; i--){
    console.log(`For : ${i}`);
}

for(let i = 2; i <= 10; i = i + 2){
    console.log(i);
}

for(let i = 1; i <= 10; i++){
    if(i == 9){
        break;
    }
    console.log(i);
}
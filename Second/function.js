// Exam

function printHello() {
    console.log('Hello');
}

printHello();

// 1

function log(message) {
    console.log(message);
}

log('Hello');
log(1234);

// 2

function changeName(obj) {
    obj.name = 'coder';
}

const Myname = { name: 'Puwan'};
changeName(Myname);
console.log(Myname);

// 3

function showMessage(message, from = 'anonymous') {
    console.log(`${message} by ${from}`);
}

showMessage('Hi!');

// 4 배열

function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}

printAll('Hi', 'Im', 'Puwan!');

// 5 전역함수 and 지역함수

let globalMessage = 'global';

function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
}

printMessage();

// 6

function sum(a, b) {
    return a + b;
}

const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

// 7

const print = function() {
    console.log('print');
};

print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 8 

function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

const printYes = function () {
    console.log('Yes!');
};

const printNo = function () {
    console.log('No!');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// 9 

// const simplePrint = function() {
//     console.log('simplePrint!');
// };

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;

// IIFE

function hello() {
    console.log('IIFE');
}

hello();
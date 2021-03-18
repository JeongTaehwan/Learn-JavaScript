//1
function add(a, b) {
    return a + b;
}

const sum = add(1, 2);
console.log(sum);

//2
function hello(name) {
    console.log('Hello', + name + '!');
}

hello('Puwan');

//3
function hello(name) {
    console.log(`Hello ${name} !`);
}

hello('Puwan');

//4
function getGrade(score) {
    if (score === 100) {
        return 'A+';
    } else if (score >= 90) {
        return 'A';
    } else if (score === 89) {
        return 'B+';
    } else if (score >= 80) {
        return 'B';
    } else if (score === 79) {
        return 'C+';
    } else if (score >= 70) {
        return 'C';
    } else {
        return 'F';
    }
}

const grade = getGrade(70);
console.log(grade);

//5 화살표 함수

//5-1
const add2 = (a, b) => {
    return a + b;
}

const sum2 = add2(1, 2);
console.log(sum);

const hello2 = (name) => {
    console.log(`Hello ${name} !`);
}

hello('Puwan');

//5-2
const add3 = (a, b) => a + b;
const sum3 = add3(1, 2);
console.log(sum);
// 1. Use strict

'use strict';

// 2. Variable
// Let (Added in ES6)

{
    let name = 'Puwan';
    console.log(name);
    name = 'hello';
    console.log(name);
}

// Const
const daysInWeek = 7;
const maxNumber = 5;

// String

const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);

//boolean

const canRead = true;
const test = 3 < 1;
console.log(test);

// null

let nothing = null;
console.log(nothing);

// undefined

let x; // = let x = undefined;
console.log(`value: ${x}, type: ${typeof nothing}`);

// symbol

const Symbol1 = Symbol('id');
const Symbol2 = Symbol('id');
console.log(Symbol1 === Symbol2);

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);

console.log(`value: ${Symbol1.description}, type: ${typeof Symbol1}`);

// Dynamic typing

let text = "Hello";
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
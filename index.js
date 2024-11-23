/*
    ES5 Vs ES6

    1. var vs let/const
    2. arrow function
    3. template literals
    4. default parameters
    5. destructuring
    6. rest and spread operator
    7. class
    8. import/export
    9. promise
    10. async/await
    11. fetch
    12. for...of
    13. for...in
*/

// var vs let/const
// let a = 5; // a global variable

// {
//     let a = 10;

//     console.log(`Inside block: ${a}`);
// }

// console.log(`Outside block: ${a}`);

// let a = 5;

// a = 10; // variable reassignment is allowed

// console.log(a);

// const a = 5;

// a = 10; // variable reassignment is not allowed

// console.log(a);

// let x = 10;

// if (true) {
//     let x = 20;

//     console.log(`Inside block: ${x}`);
// }

// console.log(`Outside block: ${x}`);

// for (var i = 1; i <= 10; i++) {
//     console.log(i);
// }

// console.log(i);

// var a = 10; // a global variable

// function test() {
//     var a = 5;
//     a = 20;

//     console.log(`Inside function: ${a}`);
// }

// test();
// console.log(`Outside function: ${a}`);

// named functions
// function sayHello() {
//     console.log('Hello World!');
// }

// sayHello();

// nameless functions or anonymous functions
// let sayHello = function () {
//     console.log('Hello World!');
// }

// sayHello();

// arrow function
// let sayHello = () => {
//     console.log('Hello World!');
// }

// sayHello();

// Immediately Invoked Function Expression
// (() => {
//     console.log('Hello World!');
// })();

// (function () {
//     console.log('Hello World!');
// })();

/*
    Template Literals

    1. We can use multi-line strings.
    2. We can use string interpolation: ${expression}

*/

// let paragraph = `Apple is a fruit and
// it is red in color.`;

// console.log(paragraph);

// let name = 'John';
// let age = 30;

// // console.log('My name is ' + name + ' and I am ' + age + ' years old.');

// console.log(`My name is ${name} and I am ${age} years old.`);

// let person = {
//     name: 'John',
//     age: 30
// }

// let person = ['John', 30];

// console.log(`${person}`);

// default parameters
// function sayHello(name = 'guest') {
//     console.log(`Hello ${name}!`);
// }

// sayHello('krish');

//  destructuring: destructuring is a way to extract values from objects and arrays.
// let person = ['John', 30];

// let name = person[0];
// let age = person[1];

// let [name, age] = ['John', 30];

// let person = ['John', 30];

// let [name, age] = person;

// console.log(`Name: ${name}`);
// console.log(`Age: ${age}`);

// let person = {
//     name: 'John',
//     age: 30
// }

// // let name = person.name;
// // let age = person.age;
// let { age, name: label } = person;

// console.log(`Name: ${label}`);
// console.log(`Age: ${age}`);

// rest and spread operator: ... (three dots)

// let nums1 = [1, 2, 3];
// let nums2 = [4, 5, 6];

// // console.log(...nums1);
// // console.log(1, 2, 3);

// let nums = [...nums1, ...nums2];

// console.log(nums);

// function sum(...nums) {
//     console.log(nums.reduce((p, c) => p + c));
// }

// sum(5, 6, 7);
// function reducer(previousValue, currentValue) {
//     return previousValue + currentValue;
// }

// let numbers = [1, 2, 3, 4, 5];

// console.log(numbers.reduce(reducer));

// let numbers = [1, 2, 3, 4, 5];

// console.log(numbers.reduce((p, c) => p + c));

/*
    previousValue = 1
    currentValue = 2

    previousValue = 3
    currentValue = 3

    previousValue = 6
    currentValue = 4

    previousValue = 10
    currentValue = 5

    15
*/

// let [a, , , b, c] = [4, 5, 6, 7, 8];

// console.log(a, b, c);

// let numbers = new Array(1, 2, 3);

// console.log(numbers);

/*

    dynamic typing: the type of a variable is determined at runtime.

*/

// function prototyping
// function DOB(date, month, year) {
//     this.date = date;
//     this.month = month;
//     this.year = year;
// }

// let dob1 = new DOB(23, 'November', 2024);
// let dob2 = new DOB(22, 'December', 2025);

// console.log(dob1);
// console.log(dob2);

class DOB {
    constructor(date, month, year) {
        this.date = date;
        this.month = month;
        this.year = year;
    }
}

let dob1 = new DOB(23, 'November', 2024);
let dob2 = new DOB(22, 'December', 2025);

console.log(dob1);
console.log(dob2);
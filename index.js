// let numbers = [3, 5, 1, 6, 2, 4];

// numbers[4] = 7;

// numbers[7] = 7;

// console.log(numbers[4]);
// console.log(numbers[6]);

// to insert one or more elements to the end of the array
// numbers.push(7, 8, 9, 10);

// to insert one or more elements to the beginning of the array
// numbers.unshift(7, 8, 9);

// to delete an element from the end of the array
// numbers.pop();
// numbers.pop();

// to delete an element from the beginning of the array
// numbers.shift(); numbers.shift();

// to insert or delete one more elements anywhere in the array
// numbers.splice(1, 3);

// numbers.splice(2, 0, 6);

// numbers.splice(2, 0, 1);

// numbers.splice(3, 0, 5, 10, 12);

// console.log(numbers);

// let veggies = ['carrot', 'ginger', 'potato', 'tomato'];

// veggies.push("garlic");

// console.log(veggies);

// veggies.pop();

/*
    in-place methods:

    push, pop, unshift, shift, splice

    non-inplace methods:

    slice
*/

// function findAll(numbers, key) {
//     let index = -1;
//     while (true) {
//         index = numbers.indexOf(key, index + 1);

//         if (index === -1) break;

//         console.log(index);
//     }
// }

// let numbers = [3, 5, 1, 6, 2, 4, 6, 1, 2, 3, 6];

// console.log(numbers.slice(1,));

// console.log(numbers.slice(1, -3));

// console.log(numbers.includes(12));

// console.log(numbers.includes(6, 4));

// console.log(numbers.indexOf(6, 0));
// console.log(numbers.indexOf(6, 4));
// console.log(numbers.indexOf(6, 7));

// findAll(numbers, 1);

// let numbers = [3, 5, 1, 6, 2, 4];

// let index = 0;
// while (index < numbers.length) {
//     console.log(numbers[index]);
//     index++;
// }


// for (let index = 0; index < numbers.length; index++) {
//     console.log(numbers[index]);
// }

// let index = 0;
// for (; index < numbers.length;) {
//     console.log(numbers[index]);
//     index++;
// }

// let index = 10;
// do {
//     console.log(numbers[index]);
//     index++;
// } while (index < numbers.length);

// let numbers = [3, 5, 1, 6, 2, 4];

// for (let index = 0; index < numbers.length; index++) {
//     console.log(numbers[index]);
// }

// for...in loop
// for (let index in numbers) {
//     console.log(numbers[index]);
// }

// for...of loop
// for (let number of numbers) {
//     console.log(number);
// }

// for...each loop
// numbers.forEach((value, index, array) => {
//     console.log(value, index, array, array[index]);
// })

// let numbers = [3, 5, 1, 6, 2, 4];

// let numbersTwoMultiples = [];

// numbers.forEach(value => {
//     numbersTwoMultiples.push(value * 2);
// });

// numbers = numbersTwoMultiples;

// for (let index = 0; index < numbers.length; index++) {
//     numbers[index] = numbers[index] * 2;
// }

// const twoMultiples = (value) => {
//     return value * 2;
// }

// numbers = numbers.map(twoMultiples);

// console.log(numbers);

// let numbers = [3, 5, 1, 6, 2, 4];

// console.log(numbers.map(value => value * 2));

// console.log(numbers.filter(value => value > 3));

// console.log(numbers.reduce((p, c) => p + c));

let n = 5;

for (let i = 1, stars = 1; i <= n; i++, stars += 2) {
    let line = [];

    // n-1, n-2, ...0
    for (let j = n - i; j > 0; j--) {
        line.push(' ');
    }

    // push stars number of '*'
    for (let j = 1; j <= stars; j++) {
        line.push('*');
    }

    console.log(line.join(''));
}


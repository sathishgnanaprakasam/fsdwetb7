// function delay(callback, time) {
//     console.log('Delaying for ' + time + ' milliseconds');
//     setTimeout(() => {
//         callback();
//         console.log('Delay completed');
//     }, time);

// }

// function generateRandomNumber() {
//     let randomNumber = Math.floor(Math.random() * 100) + 1;
//     console.log(randomNumber);
// }

// delay(generateRandomNumber, 2000);

// let numbers = [4, 5, 6, 7, 8];

// function square(number) {
//     return number * number;
// }

// console.log(numbers.map(square));

// function add(a, b) {
//     return a + b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// function calculate(a, b, callback) {
//     const result = callback(a, b);
//     console.log(result);
// }

// calculate(5, 10, multiply);

// callback hell

function firstTask(callback) {
    console.log('First task started');
    setTimeout(() => {
        console.log('First task completed');
        callback();
    }, 2000);
}

function secondTask(callback) {
    console.log('Second task started');
    setTimeout(() => {
        console.log('Second task completed');
        callback();
    }, 2000);
}

function thirdTask(callback) {
    console.log('Third task started');
    setTimeout(() => {
        console.log('Third task completed');
        callback();
    }, 2000);
}

firstTask(function () {
    secondTask(function () {
        thirdTask(function () {
            console.log('All tasks completed');
        });
    });
});

/*
    E = firstTask(callback)
        - callback = function () {
            secondTask(function () {
                thirdTask(function () {
                    console.log('All tasks completed');
                });
            });
        }
*/
// named functions
// function sayHello(times) {
//     let count = 0;
//     while (count < times) {
//         console.log('hello');
//         count++;
//     }
// }

// anonymous functions
// const sayHello = function (times) {
//     let count = 0;
//     while (count < times) {
//         console.log('hello');
//         count++;
//     }
// }

// arrow function
// const sayHello = (times) => {
//     let count = 0;
//     while (count < times) {
//         console.log('hello');
//         count++;
//     }
// }

// sayHello(5);

// IIFE: Immediately Invoked Function Expression
// ((times) => {
//     let count = 0;
//     while (count < times) {
//         console.log('hello');
//         count++;
//     }
// })(5);

(function (times) {
    let count = 0;
    while (count < times) {
        console.log('hello');
        count++;
    }
})(3);
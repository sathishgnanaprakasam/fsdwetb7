// const btn = document.querySelector('#btn');

// btn.addEventListener('click', () => {
//     setInterval(() => {
//         setTimeout(() => {
//             console.log('Hello World');
//         }, 1000);
//     }, 3000);
// });

function sayHello(times) {
    if (times === 0) return;

    sayHello(times - 1);
    console.log('Hello World');
}

sayHello(5);
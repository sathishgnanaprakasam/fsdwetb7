let textarea = document.querySelector('#textarea');

textarea.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'Enter') {
        console.log('Control + Enter');
    }
});

// textarea.addEventListener('keyup', (e) => {
//     console.log(e.key);
// });
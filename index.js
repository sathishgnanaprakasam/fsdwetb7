let grid = document.querySelector('.grid');

let guesses = 6;
let guessingRow = 0;
let currentGuess = '';

for (let i = 0; i < guesses * 5; i++) {
    let div = document.createElement('div');
    div.classList.add('cell');
    grid.appendChild(div);
}

// general event listener
document.addEventListener('keypress', (event) => {
    if (currentGuess.length > 5) {
        return;
    }

    let key = event.key;

    let isLetter = key.match(/[a-z]/i);
    if (event.ctrlKey && key === 'd') {
        grid.children[guessingRow * 5 + currentGuess.length - 1].textContent = '';
        currentGuess = currentGuess.slice(0, -1);
        console.log(currentGuess);
    } else if (key === 'Enter') {
        console.log('Enter key pressed');
    } else if (isLetter && key.length === 1) {
        grid.children[guessingRow * 5 + currentGuess.length].textContent = key;
        currentGuess += key;
        console.log(currentGuess);

        // only after 5 letters are entered followed by enter key
        // if (grid.children[guessingRow * 5 + 4].textContent) {
        //     guessingRow++;
        // }
    }
})
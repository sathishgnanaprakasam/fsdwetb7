let squares = document.querySelectorAll('.square');
let status = document.querySelector('.status');

function createBoard() {



    // consider the squares to be 3 x 3 grid
    squares.forEach((square, index) => {
        // first row
        if (index < 3) {
            square.style.borderTop = 'none';
        }

        // last row
        if (index > 5) {
            square.style.borderBottom = 'none';
        }

        // first column
        if (index % 3 === 0) {
            square.style.borderLeft = 'none';
        }

        // last column
        if (index % 3 === 2) {
            square.style.borderRight = 'none';
        }
    });
}

createBoard();

let values = new Array(9).fill(null);
let player = 'X';
let winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

];
let winner = null;

function checkWinner(values, player) {
    for (let i = 0; i < winningLines.length; i++) {
        let [a, b, c] = winningLines[i];

        if (values[a] === player && values[b] === player && values[c] === player) {
            return player;
        }
    }
    return null;
}

squares.forEach((square, index) => {
    square.addEventListener('click', () => {
        if (values[index] === null && !winner) {
            square.textContent = player;
            values[index] = player;

            // check if the player has won
            winner = checkWinner(values, player);

            if (winner) {
                status.innerHTML = `Winner: ${winner}`;
                return;
            }

            player = player === 'X' ? 'O' : 'X';

            status.innerHTML = `Next player: ${player}`;

            if (values.indexOf(null) === -1) {
                status.innerHTML = 'Status: Game Draw';
            }
        }
    });
});

let restart = document.querySelector('.restart');

restart.addEventListener('click', () => {
    squares.forEach(square => {
        square.textContent = '';
    });

    values = new Array(9).fill(null);
    player = 'X';
    winner = null;
    status.innerHTML = `Next player: ${player}`;
});
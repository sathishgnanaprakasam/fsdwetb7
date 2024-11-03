let squares = document.querySelectorAll('.square');

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
})
// let header = document.getElementById('header');
// let header = document.querySelector('#header');

// header.textContent = `A Blog on DOM Manipulation!`;

// console.log(header.textContent);

// const list = document.querySelectorAll('.greenText');

// console.log(list);

const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(p => {
    p.textContent += '[This is a paragraph]';
})
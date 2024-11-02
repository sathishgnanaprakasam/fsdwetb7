let card = document.querySelector('.card');

card.addEventListener('mouseenter', () => {
    card.style.backgroundColor = 'lightgreen';
});

card.addEventListener('mouseleave', () => {
    card.style.backgroundColor = 'lightblue';
});
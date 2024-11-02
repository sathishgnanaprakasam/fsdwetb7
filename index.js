let card = document.querySelector('#card');

card.addEventListener('click', () => {
    console.log('Card clicked');
});

let ln = document.querySelector('#location');

ln.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('Location clicked');
});

let city = document.querySelector('.city');

city.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('City clicked');
});
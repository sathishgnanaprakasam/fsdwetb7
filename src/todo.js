// read the id from the url
const urlParams = new URLSearchParams(window.location.search);

console.log(urlParams.get('id'));
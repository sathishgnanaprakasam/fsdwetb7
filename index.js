let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

function fetchMeaning(word) {
    // make an api call to fetch the meaning of the word
    // using XHR: XMLHttpRequest

    // create an object of XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // open a connection
    xhr.open('GET', `${url}${word}`, true);

    // process the response
    xhr.onreadystatechange = function () {
        console.log(JSON.parse(xhr.responseText));
    }

    // send the request
    xhr.send();
}

let word = 'apple';
fetchMeaning(word);
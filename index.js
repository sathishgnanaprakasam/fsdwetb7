let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

function fetchMeaning(word) {
    // make an api call to fetch the meaning of the word
    // using the fetch function
    fetch(url + word)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            console.log();

            // make another api call to fetch the todo item = 3
            fetch(`https://jsonplaceholder.typicode.com/todos/3`)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                })
                .catch((error) => {
                    console.log(error);
                })
        })
        .catch((error) => {
            console.log(error);
        })
}

let word = 'apple';
fetchMeaning(word);
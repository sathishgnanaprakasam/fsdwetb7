let url = 'https://api.dictionaryapi.dev/api/v2/entries/en_US/';

async function fetchMeaning(word) {
    // make an api call to fetch the meaning of the word
    // using the fetch function
    let response;
    let data;
    try {
        response = await fetch(url + word);

        if (response.ok) {
            try {
                data = await response.json();
            } catch (error) {
                console.log('Error in parsing JSON: ', error);
            }
        }
    } catch (error) {
        console.log('Error in fetching data: ', error);
    }

    console.log(data);
}

let word = 'apple';
fetchMeaning(word);
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // fetch data

        // do something with the data

        let data = 10;
        let successFactor = false;

        // take a decision based on whether the operation is successful or failure
        if (successFactor) {
            resolve(data);
        } else {
            reject('Network error in completing the operation!');
        }
    }, 3000);
});

promise
    .then((data) => {
        console.log('operation completed!');
        console.log('data received:', data);
    })
    .catch((error) => {
        console.log('operation failed!');
        console.log('Error:', error);
    })
    .then(() => {
        console.log('I will execute no matter success or failure')
        throw new Error('something unexpected happened');
    })
    .then(() => {
        console.log('I will execute too!');
    })
    .catch((error) => {
        console.log(error);
    })
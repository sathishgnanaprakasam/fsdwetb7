const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject();
    }, 3000);
})

promise
    .then(
        () => {
            console.log('Success');
        },
        () => {
            console.log('Error');
        }
    )

console.log(promise);
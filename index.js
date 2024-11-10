const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function copyFile(source, destination) {
    try {
        fs.copyFileSync(source, destination);
        return true;
    } catch (error) {
        return false;
    }
}

const promise = new Promise((resolve, reject) => {
    rl.question('Enter the destination file name: ', (filename) => {
        if (copyFile('source.txt', filename)) {
            resolve();
        } else {
            reject();
        }

        rl.close();
    });
});

promise
    .then(() => {
        console.log('File copied successfully');
    })
    .catch(() => {
        console.log('Error copying file');
    });
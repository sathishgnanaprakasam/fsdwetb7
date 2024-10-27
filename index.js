let advantages = [
    `Dynamic content: DOM manipulation allows you to create dynamic, interactive web pages that respond to user input.`,
    `Improved user experience: By updating the content of a page without reloading it, you can create a more seamless and engaging user experience.`,
    `Accessibility: DOM manipulation can be used to make web pages more accessible to users with disabilities, by dynamically updating the content of the page based on user input.`
]

let list = document.createElement('ul');

for (let i = 0; i < advantages.length; i++) {
    let listItem = document.createElement('li');

    listItem.textContent = advantages[i];

    list.appendChild(listItem);
}

let container = document.getElementsByClassName('container')[0];

let paragraph = document.createElement('p');

paragraph.textContent = 'Thus, DOM manipulation is a powerful tool for creating dynamic, interactive web pages that provide an improved user experience and increased accessibility.';

container.appendChild(list);
container.appendChild(paragraph);

paragraph.remove();

let header = document.getElementById('header');

let newHeader = document.createElement('h1');

newHeader.textContent = 'The Document Object Model (DOM)';

// header.remove();

header.replaceWith(newHeader);

list.removeChild(list.childNodes[0]);
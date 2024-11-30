let menuItems = ['Dashboard', 'Courses', 'Batches', 'Tasks', 'Projects', 'Queries', 'Reports'];

// Create a div element
const sidebar = document.createElement('div');

// set the classname of the div element to sidebar
sidebar.className = 'sidebar';

// create an unordered list element
const ul = document.createElement('ul');

menuItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
})

sidebar.appendChild(ul);
document.body.appendChild(sidebar);
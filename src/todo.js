const container = document.querySelector('.container');

async function loadTodo(id) {
    const response = await fetch(`https://67382aa24eb22e24fca70e92.mockapi.io/todos/${id}`);
    const todo = await response.json();

    const title = document.createElement('h1');
    title.textContent = todo.title;
    title.style.textAlign = 'center';

    const description = document.createElement('h3');
    description.textContent = todo.description;

    const timestamp = document.createElement('p');
    timestamp.innerHTML = `<strong>Created at:</strong> ${todo.createdAt}`;
    timestamp.style.fontSize = '14px';
    timestamp.style.fontStyle = 'italic';

    const isCompleted = document.createElement('p');
    isCompleted.innerHTML = `<strong>Completed:</strong> ${todo.isCompleted ? 'Yes' : 'No'}`;
    isCompleted.style.fontSize = '14px';

    const buttonsContainer = document.createElement('div');

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.marginLeft = '20px';

    // add event listener to the delete button
    deleteButton.addEventListener('click', async () => {
        // get the confirmation from the user
        const isConfirmed = confirm('Are you sure you want to delete this todo?');
        if (!isConfirmed) {
            return;
        } else {
            // make an api call to delete the item
            const response = await fetch(`https://67382aa24eb22e24fca70e92.mockapi.io/todos/${id}`, {
                method: 'DELETE'
            });

            // redirect the user to the home page
            window.location.href = '/index.html';
        }
    })

    buttonsContainer.append(editButton, deleteButton);

    // container.appendChild(title);
    // container.appendChild(description);
    container.append(title, description, timestamp, isCompleted, buttonsContainer);
}

// read the id from the url
const urlParams = new URLSearchParams(window.location.search);

const id = urlParams.get('id');

loadTodo(id);
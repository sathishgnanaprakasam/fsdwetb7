// get the reference to the updateForm
const updateForm = document.querySelector('.updateForm');

// get the id from the query string
const id = new URLSearchParams(window.location.search).get('id');

async function loadForm(id) {
    // make an api call to fetch the todo with id
    const response = await fetch(`https://67382aa24eb22e24fca70e92.mockapi.io/todos/${id}`);
    const todo = await response.json();

    // get the reference to the form elements and set the values
    updateForm.title.value = todo.title;
    updateForm.description.value = todo.description;
    updateForm.status.checked = todo.isCompleted;
}

loadForm(id);

updateForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    // get the form data
    const title = updateForm.title.value;
    const description = updateForm.description.value;
    const isCompleted = updateForm.status.checked;

    // create a todo object
    const todo = {
        title,
        description,
        isCompleted
    }

    try {
        // make an api call to update the todo
        await fetch(`https://67382aa24eb22e24fca70e92.mockapi.io/todos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        });

        alert('Todo updated successfully');

        // redirect the user to the home page
        window.location.href = '/index.html';
    } catch (error) {
        alert('Failed to update the todo');
    }
});
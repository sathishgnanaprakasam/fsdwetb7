async function loadTodos() {
    // Get the reference of the todoList div
    const todoList = document.querySelector('.todoList');

    // get the todos from the localStorage
    const todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

    todoList.innerHTML = '';

    // Create an unordered list
    const ulist = document.createElement('ul');

    // loop through the data
    // for every todo item in the data
    todos.forEach(todo => {
        // create an anchor tag
        const anchor = document.createElement('a');

        // set the href attribute of the anchor tag
        anchor.href = `./src/todo.html?id=${todo.id}`;

        // create a html list item
        const listItem = document.createElement('li');

        // add the content - title of the todo item to the html list item
        listItem.textContent = todo.title;

        anchor.appendChild(listItem);

        // append the list item to the unordered list
        ulist.appendChild(anchor);
    });

    // after exiting the loop, append the unordered list to the html todoList div
    todoList.appendChild(ulist);
}

loadTodos();

// get the reference of the addForm
const addForm = document.querySelector('.addForm');

addForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // get the title and description from the form using the form elements
    const title = addForm.todoTitle.value;
    const description = addForm.todoDescription.value;
    const isCompleted = addForm.todoCompleted.checked;

    const todo = {
        title,
        description,
        isCompleted
    };

    try {
        // get the todos from the localStorage
        let lstodos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

        // get the id of the last todo item
        const lastTodo = lstodos[lstodos.length - 1];

        todo.id = lastTodo ? lastTodo.id + 1 : 1;

        // add the new todo to the todos array
        lstodos.push(todo);

        // set the todos to the localStorage
        localStorage.setItem('todos', JSON.stringify(lstodos));

        // clear the form
        addForm.reset();

        alert('Todo added successfully');

        // redirect the user to the home page
        // window.location.href = '/index.html';
        loadTodos();
    } catch (error) {
        alert('Failed to add todo');
    }
});
async function loadTodos() {
    // Get the reference of the todoList div
    const todoList = document.querySelector('.todoList');

    // make an api call and fetch the data (list of all todos) from the mockapi url
    const response = await fetch(`https://67382aa24eb22e24fca70e92.mockapi.io/todos`);
    const todos = await response.json();

    todoList.innerHTML = '';

    // Create an unordered list
    const ulist = document.createElement('ul');

    // loop through the data
    // for every todo item in the data
    todos.forEach(todo => {
        // create a html list item
        const listItem = document.createElement('li');

        // add the content - title of the todo item to the html list item
        listItem.textContent = todo.title;

        // append the list item to the unordered list
        ulist.appendChild(listItem);
    });

    // after exiting the loop, append the unordered list to the html todoList div
    todoList.appendChild(ulist);
}

loadTodos();
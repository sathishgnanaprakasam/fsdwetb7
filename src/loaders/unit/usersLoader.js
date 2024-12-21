const usersLoader = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const users = await response.json();

        return users;
    } catch (error) {
        return [];
    }
}

export default usersLoader;
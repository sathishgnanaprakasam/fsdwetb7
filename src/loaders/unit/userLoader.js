const userLoader = async ({ params }) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
        const user = await response.json();
        return user;
    } catch (error) {
        return {};
    }
}

export default userLoader;
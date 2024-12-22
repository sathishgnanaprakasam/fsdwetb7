import axios from "axios";

const usersLoader = async () => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);

        return response.data;
    } catch (error) {
        return [];
    }
}

export default usersLoader;
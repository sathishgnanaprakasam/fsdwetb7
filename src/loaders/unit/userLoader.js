import axios from "axios";

const userLoader = async ({ params }) => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`);
        return response.data;
    } catch (error) {
        return {};
    }
}

export default userLoader;
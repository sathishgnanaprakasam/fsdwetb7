import axios from "axios";
import instance from "../../services/instance";

const usersLoader = async () => {
    try {
        const response = await instance.get(`/users`);

        return response.data;
    } catch (error) {
        return [];
    }
}

export default usersLoader;
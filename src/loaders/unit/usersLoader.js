import userServices from "../../services/userServices";

const usersLoader = async () => {
    try {
        const response = await userServices.getUsers();

        return response.data;
    } catch (error) {
        return [];
    }
}

export default usersLoader;
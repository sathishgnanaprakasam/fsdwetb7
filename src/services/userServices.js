import instance from "./instance";

const userServices = {
    getUsers: async () => {
        try {
            return await instance.get(`/users`);
        } catch (error) {
            return [];
        }
    },
}

export default userServices;
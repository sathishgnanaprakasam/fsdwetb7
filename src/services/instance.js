import axios from "axios";

const baseURL = `https://jsonplaceholder.typicode.com`;

const instance = axios.create({
    baseURL,
    timeout: 3000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default instance;
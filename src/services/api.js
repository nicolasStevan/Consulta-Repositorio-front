import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:8080/api/",
    headers: {
        Accept: "application/json"
    }
})

export default api
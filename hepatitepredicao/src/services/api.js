import axios from 'axios';
const api = axios.create({
    baseURL: 'http://exemplo-rota/'
})

export default api;
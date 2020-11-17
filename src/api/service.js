import axios from 'axios';

const service = axios.create({
    baseURL: 'http://localhost:5000/api/',
    timeout: 10000,
    withCredentials: true
});

export default service;
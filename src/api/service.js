import Vue from 'vue';
import axios from 'axios';

const service = axios.create({
    baseURL: 'http://localhost:5000/api/',
    timeout: 10000,
    withCredentials: true
});

service.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status === 401) {
            localStorage.removeItem('userData');
            Vue.$cookies.remove('.AspNetCore.Cookies');
            window.location.assign('/login');
        }
        return error;
    }
);


export default service;
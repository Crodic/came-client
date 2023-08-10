import axios from 'axios';

const Axios = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 10000,
})

Axios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

Axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default Axios;


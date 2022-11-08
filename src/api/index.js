
import axios from 'axios';
import { parseCookies } from 'nookies';

const baseUrl = 'http://localhost:1337';

const cookies = parseCookies();

const config = {
    headers: {
        'Authorization': cookies.user_jwt
    }
};

export const api = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});


export const login = (data) => api.post('/api/auth/local', data);
export const signup = (data) => api.post('/api/auth/local/register', data);
// export const whoIam = () => api.get('/api/users/me',config);
// export const getProduct = () => api.get('/api/products?populate=*',config);
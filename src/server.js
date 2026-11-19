import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://jsonplaceholder.typecode.com',
    timeout: 10000,
    headers: {
        'content-type': 'application/json'
    }
});
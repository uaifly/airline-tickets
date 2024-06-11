import axios from 'axios';

//const baseurl = 'https://localhost:7280' 
const baseUrl = 'https://uaifly-server-test.azurewebsites.net'

const api = axios.create({
    baseURL: baseUrl,
});

export default api;
import axios, { AxiosInstance } from 'axios';

const apiClient: AxiosInstance = axios.create({
    baseURL: 'https://4b10-176-29-149-58.ngrok-free.app',
});

export default apiClient;
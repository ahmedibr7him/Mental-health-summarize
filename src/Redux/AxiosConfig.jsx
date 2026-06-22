import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://chat-production-ecb7.up.railway.app/swagger/index.html", 
  headers: {'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('userToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
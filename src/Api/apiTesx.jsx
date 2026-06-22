import axios from "axios";

/* Chat API */
export const chatApi = axios.create({baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/* Therapy API */
export const therapyApi = axios.create({baseURL: import.meta.env.VITE_THERAPY_API_URL,
  headers: {
    "Content-Type": "application/json",
    apikey: import.meta.env.VITE_API_KEY,
  },
});

/* Chat Auth */
chatApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

/* Therapy Auth */
therapyApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
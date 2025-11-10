import axios from "axios";

// Create axios instance with default config
const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000",
    timeout: parseInt(import.meta.env.VITE_API_TIMEOUT) || 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

// Request interceptor
api.interceptors.request.use(
    (config) => {
        // Add auth token if available
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
api.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        const message =
            error.response?.data?.message ||
            error.message ||
            "Something went wrong";
        return Promise.reject(new Error(message));
    }
);

// API methods
export const apiService = {
    // GET request
    get: (url, config = {}) => api.get(url, config),

    // POST request
    post: (url, data = {}, config = {}) => api.post(url, data, config),

    // PUT request
    put: (url, data = {}, config = {}) => api.put(url, data, config),

    // DELETE request
    delete: (url, config = {}) => api.delete(url, config),

    // PATCH request
    patch: (url, data = {}, config = {}) => api.patch(url, data, config),
};

// Specific API endpoints
export const toursAPI = {
    getAllTours: () => apiService.get("/tours"),
    getTourById: (id) => apiService.get(`/tours/${id}`),
    createTour: (data) => apiService.post("/tours", data),
    updateTour: (id, data) => apiService.put(`/tours/${id}`, data),
    deleteTour: (id) => apiService.delete(`/tours/${id}`),
};

export const authAPI = {
    login: (credentials) => apiService.post("/auth/login", credentials),
    register: (userData) => apiService.post("/auth/register", userData),
    logout: () => apiService.post("/auth/logout"),
    getProfile: () => apiService.get("/auth/profile"),
};

export default api;

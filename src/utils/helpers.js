// Environment variables helper
export const env = {
    API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
    API_TIMEOUT: import.meta.env.VITE_API_TIMEOUT,
    APP_NAME: import.meta.env.VITE_APP_NAME,
    APP_VERSION: import.meta.env.VITE_APP_VERSION,
    NODE_ENV: import.meta.env.VITE_NODE_ENV,
    isDevelopment: import.meta.env.MODE === "development",
    isProduction: import.meta.env.MODE === "production",
};

// Format currency
export const formatCurrency = (amount, currency = "VND") => {
    return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: currency,
    }).format(amount);
};

// Format date
export const formatDate = (date, options = {}) => {
    const defaultOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    return new Intl.DateTimeFormat("vi-VN", {
        ...defaultOptions,
        ...options,
    }).format(new Date(date));
};

// Debounce function
export const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Local storage helpers
export const storage = {
    get: (key) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (error) {
            console.error("Error getting from localStorage:", error);
            return null;
        }
    },
    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error("Error setting to localStorage:", error);
        }
    },
    remove: (key) => {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error("Error removing from localStorage:", error);
        }
    },
    clear: () => {
        try {
            localStorage.clear();
        } catch (error) {
            console.error("Error clearing localStorage:", error);
        }
    },
};

// Generate unique ID
export const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

import { create } from "zustand";

const useAppStore = create((set, get) => ({
    // App state
    loading: false,
    error: null,
    user: null,

    // Tours state
    tours: [],
    selectedTour: null,

    // Actions
    setLoading: (loading) => set({ loading }),
    setError: (error) => set({ error }),
    setUser: (user) => set({ user }),

    // Tours actions
    setTours: (tours) => set({ tours }),
    setSelectedTour: (tour) => set({ selectedTour: tour }),

    // Clear error
    clearError: () => set({ error: null }),

    // Reset store
    reset: () =>
        set({
            loading: false,
            error: null,
            user: null,
            tours: [],
            selectedTour: null,
        }),
}));

export default useAppStore;

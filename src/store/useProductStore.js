import { create } from 'zustand';
import { getProducts } from '../services/dummyAPI';

export const useProductStore = create((set, get) => ({
  products: [],
  loading: false,
  error: null,
  favorites: [],

  fetchProducts: async () => {
    set({ loading: true, error: null });
    try {
      const products = await getProducts();
      set({ products, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  clearProducts: () => {
    set({ products: [], loading: false, error: null });
  }
}));

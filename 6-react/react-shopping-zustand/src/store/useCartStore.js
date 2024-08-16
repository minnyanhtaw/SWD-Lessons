import { create } from "zustand";

const useCartStore = create((set) => ({
  carts: [
    {
      id: 1,
      productId: 3,
      quantity: 3,
    },
    {
      id: 2,
      productId: 7,
      quantity: 4,
    },
  ],

  addCart: (newCart) => {
    set((state) => ({
      carts: [...state.carts, newCart],
    }));
  },

  increaseQuantity: (productId) => {
    set((state) => ({
      carts: state.carts.map((el) =>
        el.id === productId ? { ...el, quantity: el.quantity + 1 } : el
      ),
    }));
  },

  decreaseQuantity: (productId) => {
    set((state) => ({
      carts: state.carts.map((el) =>
        el.id === productId ? { ...el, quantity: el.quantity - 1 } : el
      ),
    }));
  },

  removeCart: (id) => {
    set((state) => ({
      carts: state.carts.filter((el) => el.id !== id),
    }));
  },
}));

export default useCartStore;

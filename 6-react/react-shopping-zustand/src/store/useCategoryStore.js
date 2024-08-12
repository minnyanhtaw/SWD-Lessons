import { create } from "zustand";

const useCategoryStore = create((set) => ({
  categories: [
    { id: 1, name: "All", isActive: true },
    { id: 2, name: "Electronics", isActive: false },
    { id: 3, name: "Jewelry", isActive: false },
    { id: 4, name: "Men's clothing", isActive: false },
    { id: 5, name: "Women's clothing", isActive: false },
  ],
  activeCategory: (categoryId) =>
    set((state) => ({
      categories: state.categories.map((el) =>
        el.id === categoryId
          ? { ...el, isActive: true }
          : { ...el, isActive: false }
      ),
    })),
}));

export default useCategoryStore;

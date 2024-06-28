import { create } from "zustand";

const initialState = {
  count: 4,
};

const useCountStore = create((set) => {
  return {
    ...initialState,
    increment: () => set((state) => ({ count: state.count + 1 })),
    // increment: () => {
    //   set((oldState) => {
    //     return { count: oldState.count + 1 };
    //   });
    // },

    // decrement: () => {
    //   set((oldState) => {
    //     return { count: oldState.count - 1 };
    //   });
    // },
    decrement: () => set((state) => ({ count: state.count - 1 })),
  };
});

export default useCountStore;

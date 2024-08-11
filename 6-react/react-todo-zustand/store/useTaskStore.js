import { create } from "zustand";

const useTaskStore = create((set) => ({
  tasks: [
    {
      id: 1,
      task: "Read Js Book",
      isDone: true,
    },
    {
      id: 2,
      task: "Fix the bug in code review",
      isDone: false,
    },
    {
      id: 3,
      task: "Wake up early",
      isDone: true,
    },
    {
      id: 4,
      task: "Learn React",
      isDone: false,
    },
    {
      id: 5,
      task: "Take a nap",
      isDone: false,
    },
  ],
  removeTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.filter((el) => el.id !== taskId),
    })),
  addTask: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask] })),

  doneTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.map((el) =>
        el.id === taskId ? { ...el, isDone: !el.isDone } : el
      ),
    })),
}));

export default useTaskStore;

import axios from "axios";
import React, { createContext, useState } from "react";
import useSWR, { useSWRConfig } from "swr";
export const TaskContext = createContext();

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const TaskProvider = ({ children }) => {
  console.log(import.meta.env.VITE_BASE_URL);
  // const [tasks, setTask] = useState([]);
  const {
    data = [],
    error,
    isLoading,
  } = useSWR("http://localhost:5000/tasks", fetcher);

  const api = axios.create({
    baseURL: `http://localhost:5000/tasks`,
    headers: {
      "Content-Type": "application/json",
    },
  });
  // console.log(data);

  const { mutate } = useSWRConfig();

  const addTask = async (newTask) => {
    await api.post("/", newTask);

    // const res = await fetch("http://localhost:5000/tasks", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newTask),
    // });

    mutate("http://localhost:5000/tasks");
    // setTask([...tasks, newTask]);
  };
  const deleteTask = async (id) => {
    await api.delete(`/${id}`);
    // const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    //   method: "DELETE",
    // });

    mutate("http://localhost:5000/tasks");
    // setTask(tasks.filter((task) => task.id !== id));
  };

  const doneTask = async (id, currentState) => {
    await axios.patch(`/${id}`, {
      isDone: !currentState,
    });
    // const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ isDone: !currentState }),
    // });

    mutate("http://localhost:5000/tasks");
    // setTask(
    //   tasks.map((task) =>
    //     task.id === id ? { ...task, isDone: !task.isDone } : task
    //   )
    // );
  };

  return (
    <TaskContext.Provider
      value={{ tasks: data, isLoading, addTask, deleteTask, doneTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;

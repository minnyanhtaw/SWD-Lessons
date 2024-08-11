import React, { createContext, useState } from "react";
export const TaskContext = createContext();
const TaskProvider = ({ children }) => {
  const [tasks, setTask] = useState([
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
  ]);

  const addTask = (newTask) => {
    setTask([...tasks, newTask]);
  };
  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };

  const doneTask = (id) => {
    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, setTask, deleteTask, doneTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;

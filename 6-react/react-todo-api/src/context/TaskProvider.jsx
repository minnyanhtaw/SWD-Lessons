import React, { createContext, useEffect, useState } from "react";
export const TaskContext = createContext();
const TaskProvider = ({ children }) => {
  const [tasks, setTask] = useState([]);
  const [taskLoading, setTaskLoading] = useState(false);
  const [sending, setSending] = useState(false);

  const addTask = async (newTask) => {
    setSending(true);
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newTask),
    });

    const data = await res.json();
    setTask([...tasks, data]);
    setSending(false);
  };

  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();
    setTask(tasks.filter((task) => task.id !== id));
  };

  const fetchTask = async () => {
    setTaskLoading(true);
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    setTask(data);
    setTaskLoading(false);
  };

  useEffect(() => {
    fetchTask();
  }, []);

  const doneTask = async (id, currentState) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ isDone: !currentState }),
    });

    const data = await res.json();
    console.log(data);
    setTask(tasks.map((task) => (task.id === id ? data : task)));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        taskLoading,
        sending,
        addTask,
        setTask,
        deleteTask,
        doneTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;

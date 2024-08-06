import React, { useState } from "react";
import "./index.css";
import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([
    "Finish project report",
    "Attend team meeting",
    "Update website content",
    "Reply to client emails",
    "Review code for bugs",
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskToRemove) => {
    setTasks(tasks.filter((task) => task !== taskToRemove));
  };

  return (
    <div className=" p-5 flex flex-col gap-5 max-w-[500px] mx-auto">
      <Heading />
      <CreateTask addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default App;

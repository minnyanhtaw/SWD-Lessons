import React, { useState } from "react";
import "./index.css";
import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import TaskProvider from "./context/TaskProvider";

const App = () => {
  return (
    <TaskProvider>
      <div className=" p-5 flex flex-col gap-5 max-w-[500px] mx-auto">
        <Heading />
        <CreateTask  />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;

import React, { useState } from "react";

const CreateTask = ({ addTask }) => {
  const [job, setJob] = useState("");

  const handleOnChange = (event) => {
    setJob(event.target.value);
  };

  const handleAddBtn = () => {
    addTask(job);
    setJob("");
  };

  return (
    <div className="flex">
      <input
        className="p-2 border-2 flex-grow border-zinc-700 "
        type="text"
        value={job}
        onChange={handleOnChange}
        placeholder="Create a new task"
      />
      <button
        className="p-2 border bg-zinc-700 border-zinc-700 text-white"
        onClick={handleAddBtn}
      >
        Add Task
      </button>
    </div>
  );
};

export default CreateTask;

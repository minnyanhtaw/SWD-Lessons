import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskProvider";

const CreateTask = () => {
  const { addTask, sending } = useContext(TaskContext);
  const [job, setJob] = useState("");

  const handleOnChange = (event) => {
    setJob(event.target.value);
  };

  const handleAddBtn = () => {
    if (job) {
      const newTask = {
        task: job,
        isDone: false,
      };
      addTask(newTask);
      setJob("");
    } else {
      alert("Please add a task");
    }
  };

  return (
    <div className="flex">
      <input
        className="p-2 disabled:opacity-30 border-2 flex-grow border-zinc-700 "
        type="text"
        disabled={sending}
        value={job}
        onChange={handleOnChange}
        placeholder="Create a new task"
        required
      />
      <button
        className="p-2 border disabled:opacity-30 bg-zinc-700 border-zinc-700 text-white"
        onClick={handleAddBtn}
        disabled={sending}
      >
        {sending ? "Sending..." : "Add Task"}
      </button>
    </div>
  );
};

export default CreateTask;

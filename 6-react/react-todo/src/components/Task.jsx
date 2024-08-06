import React from "react";

const Task = ({ job, deleteTask }) => {
  const handleDelBtn = () => {
    deleteTask(job);
  };
  return (
    <div className="p-3 border-2 border-zinc-700 flex justify-between items-center">
      <p>{job}</p>
      <button
        className="p-2  bg-red-100  text-red-700 text-sm rounded"
        onClick={handleDelBtn}
      >
        Del
      </button>
    </div>
  );
};

export default Task;

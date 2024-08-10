import React, { useContext } from "react";
import { TaskContext } from "../context/TaskProvider";

const Task = ({ job: { id, task, isDone } }) => {
  const { deleteTask, doneTask } = useContext(TaskContext);
  const handleDelBtn = () => {
    deleteTask(id);
  };

  const handleOnChange = () => {
    doneTask(id);
  };

  return (
    <div className="p-3 border-2 border-zinc-700 flex justify-between items-center">
      <div className=" flex gap-3 items-center">
        <input
          type="checkbox"
          checked={isDone}
          onChange={handleOnChange}
          className=" w-4 h-4"
        />
        <p className={isDone ? "line-through" : ""}>{task}</p>
      </div>
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

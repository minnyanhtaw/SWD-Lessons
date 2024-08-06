import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <div>
      <h3 className=" text-zinc-600 font-bold mb-3">
        Task List ( Total {tasks.length} / Done 0 )
      </h3>
      <div className=" grid grid-cols-1 gap-2">
        {tasks.map((el) => (
          <Task job={el} key={el} deleteTask={deleteTask} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;

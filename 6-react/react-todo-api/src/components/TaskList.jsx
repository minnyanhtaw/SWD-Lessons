import React, { useContext } from "react";
import Task from "./Task";
import { TaskContext } from "../context/TaskProvider";
import SkeletonLoader from "./SkeletonLoader";

const TaskList = () => {
  const { tasks, taskLoading } = useContext(TaskContext);
  return (
    <div>
      <h3 className=" text-zinc-600 font-bold mb-3">
        Task List ( Total {tasks.length} / Done 0 )
      </h3>
      <div className=" grid grid-cols-1 gap-2">
        {tasks.map((el) => (
          <Task job={el} key={el.id} />
        ))}
      </div>
      {taskLoading && <SkeletonLoader />}
    </div>
  );
};

export default TaskList;

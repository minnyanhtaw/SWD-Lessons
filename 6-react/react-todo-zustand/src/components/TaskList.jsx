import React, { useContext } from "react";
import Task from "./Task";
import { TaskContext } from "../context/TaskProvider";
import useTaskStore from "../../store/useTaskStore";

const TaskList = () => {
  const { tasks } = useTaskStore();
  return (
    <div>
      <h3 className=" text-zinc-600 font-bold mb-3">
        Task List ( Total {tasks.length} / Done{" "}
        {tasks.filter((el) => el.isDone).length} )
      </h3>
      <div className=" grid grid-cols-1 gap-2">
        {tasks.map((el) => (
          <Task job={el} key={el.id} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;

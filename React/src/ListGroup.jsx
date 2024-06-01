import React from "react";
import emptySvg from "./assets/empty.svg";
import List from "./List";
import EmptyList from "./EmptyList";

const ListGroup = () => {
  const tasks = [
    {
      id: 1,
      job: "Read Js Book",
      isDone: true,
    },
    {
      id: 2,
      job: "Read Documentation",
      isDone: true,
    },
    {
      id: 3,
      job: "Meet With Client",
      isDone: false,
    },
    {
      id: 4,
      job: "Prepare For Interview",
      isDone: false,
    },
  ];
  return (
    <div id="listGroup" className="flex flex-col gap-3">
      <EmptyList />
      <List job="San" isDone={true}/>
      <List job="Kyi" isDone={false}/>
      <List job="Tar" isDone={true}/>

      {/* {tasks.map((task) => (
        <div
          className={` ${task.isDone && "opacity-40" } border p-2 bg-zinc-400`}
          key={task.id}
        >
          <p>
            {task.id} | {task.isDone ? "Done" : "Not Yet"}
          </p>
          <p>{task.job}</p>
        </div>
      ))} */}
    </div>
  );
};

export default ListGroup;

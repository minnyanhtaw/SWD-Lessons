import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  const handlerAddBtn = () => {
    console.log("u click add");
    setCount(count + 1);
  };

  const handlerSubBtn = () => {
    console.log("u click sub");
    setCount(count - 1);
  };

  return (
    <div className=" grid grid-cols-2 p-5 gap-4">
      <h1 className=" col-span-2 text-center text-5xl mb-5">{count}</h1>
      <button
        onClick={handlerSubBtn}
        className=" col-span-1 border rounded text-white bg-zinc-700  p-2 duration-75 active:scale-95"
      >
        Sub
      </button>
      <button
        onClick={handlerAddBtn}
        className=" col-span-1 border rounded text-white bg-zinc-700  p-2 duration-75 active:scale-95"
      >
        Add
      </button>
    </div>
  );
};

export default Counter;

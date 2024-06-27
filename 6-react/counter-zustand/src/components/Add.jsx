import React, { useContext } from "react";
import { CounterContext } from "../context/CounterProvider";

const Add = () => {
  const { increment } = useContext(CounterContext);

  return (
    <button onClick={increment} className=" border p-3 bg-blue-700 text-white">
      Add
    </button>
  );
};

export default Add;

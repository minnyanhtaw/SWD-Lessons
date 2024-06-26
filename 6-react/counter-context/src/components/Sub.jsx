import React, { useContext } from "react";
import { CounterContext } from "../context/CounterProvider";

const Sub = () => {
  const { decrement } = useContext(CounterContext);
  return (
    <button onClick={decrement} className=" border p-3 bg-blue-700 text-white">
      Sub
    </button>
  );
};

export default Sub;

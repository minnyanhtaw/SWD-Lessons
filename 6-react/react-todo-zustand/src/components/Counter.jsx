import React, { useState } from "react";
import useCounterStore from "../../store/useCounterStroe";

const Counter = () => {
  const { count, resetCount, increaseCount, decreaseCount } = useCounterStore();

  const handleReset = () => {
    resetCount();
  };

  const handleIncrement = () => {
    // setCount(count + 1);
    increaseCount(2);
  };

  const handleDecrement = () => {
    decreaseCount();
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h1 className="text-2xl font-bold">
        Counter: <span className=" text-3xl">{count}</span>
      </h1>
      <div className="flex space-x-4">
        <button
          onClick={handleIncrement}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
        >
          Increment
        </button>
        <button
          onClick={handleDecrement}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700"
        >
          Decrement
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;

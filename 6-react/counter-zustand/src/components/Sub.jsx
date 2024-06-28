import React, { useContext } from "react";
import useCountStore from "../stores/CountStore";

const Sub = () => {
  const { decrement } = useCountStore();
  return (
    <button onClick={decrement} className=" border p-3 bg-blue-700 text-white">
      Sub
    </button>
  );
};

export default Sub;

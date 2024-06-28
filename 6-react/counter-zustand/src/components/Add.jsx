import React, { useContext } from "react";
import useCountStore from "../stores/CountStore";

const Add = () => {
  const { increment } = useCountStore();
  return (
    <button onClick={increment} className=" border p-3 bg-blue-700 text-white">
      Add
    </button>
  );
};

export default Add;

import React, { useContext } from "react";
import useCountStore from "../stores/CountStore";

const Counter = () => {
  const {count} = useCountStore();
  

  return <h1 className="text-3xl">{count}</h1>;
};

export default Counter;

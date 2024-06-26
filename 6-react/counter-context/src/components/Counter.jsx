import React, { useContext } from "react";
import { CounterContext } from "../context/CounterProvider";

const Counter = () => {
  const { count } = useContext(CounterContext);
  return <h1 className="text-3xl">{count}</h1>;
};

export default Counter;

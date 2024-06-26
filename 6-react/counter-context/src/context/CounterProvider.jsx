import React, { createContext, useContext, useState } from "react";

export const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(5);

  const increment = () => {
    return setCount(count + 1);
  };

  const decrement = () => {
    return setCount(count - 1);
  };

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;

import React from "react";
import Counter from "./components/Counter";
import Add from "./components/Add";
import Sub from "./components/Sub";
import CounterProvider from "./context/CounterProvider";

const App = () => {
  return (
    <>
      <Counter />
      <Add />
      <Sub />
    </>
  );
};

export default App;

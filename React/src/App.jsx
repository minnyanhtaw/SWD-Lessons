import React from "react";
import emptySvg from "./assets/empty.svg";
import Heading from "./Heading";
import ListCreateForm from "./ListCreateForm";
import Status from "./Status";
import ListGroup from "./ListGroup";

const App = () => {
  return (
    <div className="border mx-auto mt-10 max-w-[500px] p-5">
      <Heading />
      <ListCreateForm />
      <Status />
      <ListGroup />
    </div>
  );
};

export default App;

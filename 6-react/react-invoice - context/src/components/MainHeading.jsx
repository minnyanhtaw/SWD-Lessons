import React, { Children } from "react";

const MainHeading = ({ children }) => {
  return <h1 className=" text-3xl font-bold text-zinc-700">{children}</h1>;
};

export default MainHeading;

/* eslint-disable no-unused-vars */
import React from "react";

// eslint-disable-next-line react/prop-types
const Container = ({ children,className }) => {
  return (
    <div className={`max-w-[2520px] w-full mx-auto xl:px-20 md:px-10 sm:px-2 ${className}`}>
      {children}
    </div>
  );
};

export default Container;

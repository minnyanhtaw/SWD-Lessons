import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={` w-full md:w-[720] lg:w-[1000px] mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;

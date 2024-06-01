import React from "react";
import emptySvg from "./assets/empty.svg";


const EmptyList = () => {
  return (
    <div className="hidden last:flex justify-center items-center">
      <img className="w-[300px]" src={emptySvg} alt="empty stage svg" />
    </div>
  );
};

export default EmptyList;

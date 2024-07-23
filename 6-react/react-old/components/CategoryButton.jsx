/* eslint-disable react/prop-types */
import React from "react";

const CategoryButton = ({ name, current }) => {
  return (
    <button
      className={`${
        current && "bg-zinc-800 text-white"
      } border rounded text-nowrap border-black p-2 me-2`}
    >
      {name}
    </button>
  );
};

export default CategoryButton;

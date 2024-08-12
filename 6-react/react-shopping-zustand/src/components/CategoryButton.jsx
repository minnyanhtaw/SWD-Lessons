// eslint-disable-next-line no-unused-vars
import React from "react";
import useCategoryStore from "../store/useCategoryStore";

const CategoryButton = ({ category: { id, name, isActive } }) => {
  const { activeCategory } = useCategoryStore();

  const handleClick = () => {
    activeCategory(id);
  };

  return (
    <button
      onClick={handleClick}
      className={`${
        isActive && "bg-zinc-800 text-white"
      } border rounded text-nowrap border-black p-2 me-2 active:scale-90 duration-150`}
    >
      {name}
    </button>
  );
};

export default CategoryButton;

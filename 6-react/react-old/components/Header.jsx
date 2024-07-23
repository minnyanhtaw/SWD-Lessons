import React from "react";

const Header = () => {
  return (
    <header className=" p-5">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-zinc-700">Online Shop</h1>
        <button className="border border-black p-2 rounded relative">
          My Cart
          <span
            className="text-xs absolute bg-red-600 py-1 px-2
           top-0 right-0 translate-x-1/2 -translate-y-1/2 rounded text-white"
          >
            1
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;

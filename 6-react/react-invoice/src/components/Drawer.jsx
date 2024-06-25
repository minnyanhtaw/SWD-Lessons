import React from "react";
import MainHeading from "./MainHeading";
import SubHeading from "./SubHeading";
import CreateProductForm from "./CreateProductForm";
import { Button } from "flowbite-react";
import { HiXMark } from "react-icons/hi2";

const Drawer = ({ isDrawerOpen, handleDrawer, products }) => {
  return (
    <div
      className={` fixed shadow-md right-0 top-0 w-[300px] duration-300 p-3 bg-white h-screen ${
        !isDrawerOpen && "translate-x-full"
      }`}
    >
      <div className=" flex justify-between items-center">
        <div className="mb-3">
          <MainHeading>Your Product</MainHeading>
          <SubHeading>Invoice App</SubHeading>
        </div>
        <Button onClick={handleDrawer} color="gray">
          <HiXMark />
        </Button>
      </div>

      <div className="flex flex-col gap-4 mb-5">
        {products.map(({ name, price, id }) => (
          <div
            key={id}
            className=" flex items-center justify-between px-2 py-3 border-2 border-zinc-700"
          >
            <p className=" text-zinc-700">{name}</p>
            <p className="text-zinc-700">{price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drawer;

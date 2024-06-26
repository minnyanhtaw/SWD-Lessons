import React, { useContext } from "react";
import MainHeading from "./MainHeading";
import SubHeading from "./SubHeading";
import CreateProductForm from "./CreateProductForm";
import { Button } from "flowbite-react";
import { HiXMark } from "react-icons/hi2";
import { GeneralContext } from "../context/GeneralProvider";

const Drawer = ({ products, addProduct }) => {
  const { openDrawer, handleDrawer } = useContext(GeneralContext);
  return (
    <div
      className={` fixed shadow-md right-0 top-0 w-[300px] overflow-y-scroll duration-300 p-3 bg-white h-screen ${
        !openDrawer && "translate-x-full"
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
        {products.map(({ name, price, id, stock }) => (
          <div
            key={id}
            className=" flex items-center justify-between px-2 py-3 border-2 border-zinc-700"
          >
            <p className=" text-zinc-700">
              {name} ({stock})
            </p>
            <p className="text-zinc-700">{price}</p>
          </div>
        ))}
      </div>
      <CreateProductForm addProduct={addProduct} />
    </div>
  );
};

export default Drawer;

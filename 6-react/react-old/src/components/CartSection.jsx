/* eslint-disable no-unused-vars */
import React from "react";
import products from "../data/products";
import Cart from "./Cart";
import carts from "../data/carts";

const CartSection = () => {

  return (
    <section className="flex flex-col justify-between min-h-[500px] ">
      <div className="w-full grid gap-3">
        {carts.map((cart) => (
          <Cart key={cart.id} cart={cart} />
        ))}
      </div>

      <div className=" mt-auto border-t-2 border-black pt-2">
        <div className="flex justify-end gap-16">
          <div className="">
            <p>Total ( $ )</p>
            <p className="text-end text-lg font-bold">0</p>
          </div>
          <div className="">
            <p>Tax ( 10% )</p>
            <p className="text-end text-lg font-bold">0</p>
          </div>
          <div className="">
            <p>Net Total ( $ )</p>
            <p className="text-end text-2xl font-bold">44.3</p>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="border border-black px-4 py-2 mt-3">Order Now</button>
        </div>
      </div>
    </section>
  );
};

export default CartSection;

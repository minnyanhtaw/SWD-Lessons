/* eslint-disable react/prop-types */
import React from "react";
import Breadcrumb from "./Breadcrumb";

const Cart = ({ cart }) => {
  return (
    <div className="border border-zinc-700 grid grid-cols-6 w-full p-3">
      <div className=" col-span-1">
        <img src={cart.product.image} className="w-16" alt="" />
      </div>
      <div className=" col-span-3 flex flex-col justify-center gap-3">
        <p className="textlg font-bold">{cart.product.title}</p>
        <p className=" text-zinc-600">Price ( $ {cart.product.price} )</p>
      </div>
      <div className=" col-span-1 flex flex-col items-center gap-3">
        <p>Quantity</p>
        <div className="flex items-center gap-2">
          <button className="text-white bg-zinc-800 px-2 ">-</button>
          {cart.quantity}
          <button className="text-white bg-zinc-800 px-2">+</button>
        </div>
      </div>
      <div className=" col-span-1 grid place-items-center text-lg font-bold">$ {cart.cost}</div>
    </div>
  );
};

export default Cart;

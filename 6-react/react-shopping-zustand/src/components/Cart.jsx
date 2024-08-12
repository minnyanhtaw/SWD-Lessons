/* eslint-disable react/prop-types */
import React from "react";
import Breadcrumb from "./Breadcrumb";
import useProductStore from "../store/useProductStroe";
import useCartStore from "../store/useCartStore";

const Cart = ({ cart: { id, productId, quantity } }) => {
  const { products } = useProductStore();
  const { increaseQuantity, decreaseQuantity } = useCartStore();

  const product = products.find((el) => el.id === productId);

  const cost = product.price * quantity;

  const handleIncreaseQuantity = () => {
    increaseQuantity(id);
  };

  const handleDecreaseQuantity = () => {
    decreaseQuantity(id);
  };

  return (
    <div className="border border-zinc-700 grid grid-cols-6 w-full p-3">
      <div className=" col-span-1">
        <img src={product.image} className="w-16" alt="" />
      </div>
      <div className=" col-span-2 flex flex-col justify-center gap-3">
        <p className="textlg font-bold">{product.title}</p>
        <p className=" text-zinc-600">Price ( $ {product.price} )</p>
      </div>
      <div className=" col-span-1 flex flex-col items-center gap-3">
        <p>Quantity</p>
        <div className="flex items-center gap-2">
          <button
            onClick={handleDecreaseQuantity}
            className="text-white bg-zinc-800 px-2 "
          >
            -
          </button>
          {quantity}
          <button
            onClick={handleIncreaseQuantity}
            className="text-white bg-zinc-800 px-2"
          >
            +
          </button>
        </div>
      </div>
      <div className=" col-span-2 grid place-items-center xl:text-lg font-bold">
        $ {cost}
      </div>
    </div>
  );
};

export default Cart;

/* eslint-disable no-unused-vars */
import React from "react";
import Cart from "./Cart";
import useCartStore from "../store/useCartStore";
import useProductStore from "../store/useProductStroe";

const CartSection = () => {
  const { carts } = useCartStore();
  const { products } = useProductStore();

  const total = carts.reduce((pv, cv) => {
    const cost =
      products.find((product) => product.id === cv.productId).price *
      cv.quantity;
    return pv + cost;
  }, 0);

  const tax = total * 0.05;

  const netTotal = total + tax;

  return (
    <section className="flex flex-col justify-between min-h-[500px] ">
      <div className="w-full grid gap-3">
        {carts.map((cart) => (
          <Cart key={cart.id} cart={cart} />
        ))}
      </div>

      <div className=" mt-auto border-t-2 border-black py-2">
        <div className="flex justify-end gap-16">
          <div className="">
            <p>Total ( $ )</p>
            <p className="text-end text-lg font-bold">{total.toFixed(2)}</p>
          </div>
          <div className="">
            <p>Tax ( 10% )</p>
            <p className="text-end text-lg font-bold">{tax.toFixed(2)}</p>
          </div>
          <div className="">
            <p>Net Total ( $ )</p>
            <p className="text-end text-2xl font-bold">{netTotal.toFixed(2)}</p>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="border border-black px-4 py-2 mt-3">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartSection;

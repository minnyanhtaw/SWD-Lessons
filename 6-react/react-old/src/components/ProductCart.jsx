/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Star from "./Star";
import { Link } from "react-router-dom";
import carts from "../data/carts";

const ProductCart = ({
  product: {
    id,
    title,
    price,
    image,
    rating: { rate },
  },
}) => {
  return (
    <Link
      to={`/product-detail/${id}`}
      className="p-5 border-2 border-zinc-700 flex flex-col items-start gap-2"
    >
      <img src={image} className="h-36" alt="" />
      <p className="font-bold line-clamp-2">{title}</p>
      <Star rate={rate} />
      <div className="flex justify-between items-end w-full">
        <p className="text-sm">Price ( $ {price} )</p>
        {carts.find((cart) => cart.id === id) ? (
          <button className=" border text-sm border-black px-2 py-1 bg-black text-white opacity-70">
            Added
          </button>
        ) : (
          <button className=" border text-sm border-black px-2 py-1">
            Add Cart
          </button>
        )}
      </div>
    </Link>
  );
};

export default ProductCart;

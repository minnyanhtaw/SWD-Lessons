/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Star from "./Star";

const ProductCart = ({
  product: {
    title,
    price,
    image,
    rating: { rate },
  },
}) => {
  return (
    <div className="p-5 border border-black flex flex-col items-start gap-4">
      <img src={image} className="h-36" alt="" />
      <p className="font-bold line-clamp-2">{title}</p>
      <Star rate={rate} />
      <div className="flex justify-between items-end w-full">
        <p>{price}</p>
        <button className=" border text-sm border-black px-2 py-1">
          Add Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCart;

/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Star from "./Star";
import { Link, useNavigate } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import toast from "react-hot-toast";

const ProductCart = ({
  product: {
    id,
    title,
    price,
    image,
    rating: { rate },
    slug,
  },
}) => {
  const { carts, addCart } = useCartStore();
  const navigate = useNavigate();

  const handleAddedBtn = (event) => {
    event.stopPropagation();
    toast.error("This product is already exited.", {
      duration: 2000,
      position: "bottom-right",
    });
  };

  const handleAddCartBtn = (event) => {
    event.stopPropagation();
    // console.log("u click add cart");
    const newCart = {
      id: Date.now(),
      productId: id,
      quantity: 1,
    };
    addCart(newCart);
  };

  const handleOpenDetail = () => {
    navigate(`product-detail/${slug}`);
  };

  return (
    <div
      onClick={handleOpenDetail}
      className="p-5 border-2 border-zinc-700 flex flex-col items-start gap-2"
    >
      <img src={image} className="h-36" alt="" />
      <p className="font-bold line-clamp-2">{title}</p>
      <Star rate={rate} />
      <div className="flex justify-between items-end w-full">
        <p className="text-sm">Price ( $ {price} )</p>
        {carts.find((cart) => cart.productId === id) ? (
          <button
            onClick={handleAddedBtn}
            className=" border text-sm border-black px-2 py-1 bg-black text-white opacity-70"
          >
            Added
          </button>
        ) : (
          <button
            onClick={handleAddCartBtn}
            className=" border text-sm border-black px-2 py-1"
          >
            Add Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCart;

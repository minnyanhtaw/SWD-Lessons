/* eslint-disable react/prop-types */
import React from "react";
import Breadcrumb from "./Breadcrumb";
import useProductStore from "../store/useProductStroe";
import useCartStore from "../store/useCartStore";
import Swal from "sweetalert2";

const Cart = ({ cart: { id, productId, quantity } }) => {
  const { products } = useProductStore();
  const { increaseQuantity, decreaseQuantity, removeCart } = useCartStore();

  const product = products.find((el) => el.id === productId);

  const cost = product.price * quantity;

  const handleIncreaseQuantity = () => {
    increaseQuantity(id);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      decreaseQuantity(id);
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          removeCart(id);
          Swal.fire({
            title: "Deleted!",
            text: "Your Cart has been deleted.",
            icon: "success",
          });
        }
      });
    }
  };

  return (
    <div className="border border-zinc-700 grid grid-cols-6 w-full p-3">
      <div className=" col-span-1">
        <img src={product.image} className="w-16" alt="" />
      </div>
      <div className=" col-span-2 flex flex-col justify-center gap-3">
        <p className="text-lg font-bold">{product.title}</p>
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
        $ {cost.toFixed(2)}
      </div>
    </div>
  );
};

export default Cart;

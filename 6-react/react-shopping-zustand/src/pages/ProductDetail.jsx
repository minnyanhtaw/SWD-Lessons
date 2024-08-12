/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
// import products from "../data/products";
import Star from "../components/Star";
import Container from "../components/Container";
import Breadcrumb from "../components/Breadcrumb";
// import carts from "../data/carts";
import useProductStore from "../store/useProductStroe";
import useCartStore from "../store/useCartStore";

const ProductDetail = () => {
  const { carts } = useCartStore();
  const { products } = useProductStore();
  const { productId } = useParams();
  const currentProduct = products.find((product) => {
    return product.id === parseInt(productId);
  });
  console.log(currentProduct);
  return (
    <Container>
      <Breadcrumb currentPageTitle={"Product Detail"} />
      <div className="grid grid-cols-1 md:grid-cols-2 py-5 px-5 md:px-5 xl:px-20 border-2 border-zinc-700 items-start mb-5">
        <div className=" col-span-1 flex">
          <img
            src={currentProduct.image}
            className=" w-2/5 block mx-auto"
            alt=""
          />
        </div>
        <div className=" col-span-1 flex flex-col gap-5 items-start">
          <h3 className=" text-3xl font-bold">{currentProduct.title}</h3>
          <p className="bg-zinc-200 py-1 px-4">{currentProduct.category}</p>
          <p className="text-zinc-700">{currentProduct.description}</p>
          <Star rate={currentProduct.rating.rate} />
          <div className="flex justify-between w-full items-center">
            <p>Price : ( $ {currentProduct.price} )</p>
            {carts.find((cart) => cart.id === currentProduct.id) ? (
              <button className="border border-black px-4 py-2 bg-black opacity-70 text-white">
                Added
              </button>
            ) : (
              <button className="border border-black px-4 py-2">
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;

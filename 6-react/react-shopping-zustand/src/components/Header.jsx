/* eslint-disable no-unused-vars */
import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import useCartStore from "../store/useCartStore";

const Header = () => {
  const { carts } = useCartStore();
  return (
    <header className="py-5">
      <Container>
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-zinc-700">Online Shop</h1>
          <Link
            to={"/product-cart"}
            className="border border-black p-2 rounded relative"
          >
            My Cart
            <span
              className="text-xs absolute bg-red-600 py-1 px-2
             top-0 right-0 translate-x-1/2 -translate-y-1/2 rounded text-white"
            >
              {carts.length}
            </span>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;

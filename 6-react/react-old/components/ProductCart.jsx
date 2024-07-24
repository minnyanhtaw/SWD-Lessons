/* eslint-disable no-unused-vars */
import React from "react";

const ProductCart = ({ product: { title, price } }) => {
  return (
    <div>
      <p>{title}</p>
      <p>{price}</p>
    </div>
  );
};

export default ProductCart;

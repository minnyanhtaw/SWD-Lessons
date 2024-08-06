/* eslint-disable no-unused-vars */
import React from "react";
import ProductCart from "./ProductCart";
import Container from "./Container";
import products from "../data/products";

const ProductSection = () => {
  return (
    <section className="px-5 mb-5">
      <Container>
        <p className="text-sm text-zinc-700 mb-3">Available Products</p>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductSection;

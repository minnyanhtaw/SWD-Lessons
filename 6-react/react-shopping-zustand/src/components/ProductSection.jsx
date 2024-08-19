/* eslint-disable no-unused-vars */
import React from "react";
import ProductCart from "./ProductCart";
import Container from "./Container";
import useProductStore from "../store/useProductStroe";
import useCategoryStore from "../store/useCategoryStore";

const ProductSection = () => {
  const { products } = useProductStore();
  const { categories } = useCategoryStore();

  const currentCategory = categories.find((el) => el.isActive);
  console.log(currentCategory);

  return (
    <section className="px-5 mb-5">
      <Container>
        <p className="text-sm text-zinc-700 mb-3">Available Products</p>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {products
            .filter(
              (el) =>
                el.category === currentCategory.name ||
                currentCategory.name === "All"
            )
            .map((product) => (
              <ProductCart key={product.id} product={product} />
            ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductSection;

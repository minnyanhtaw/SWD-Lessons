// eslint-disable-next-line no-unused-vars
import React from "react";
import CategoryButton from "./CategoryButton";
import Container from "./Container";
import useCategoryStore from "../store/useCategoryStore";

const CategorySection = () => {
  const title = "Product Categories";
  const { categories } = useCategoryStore();
  return (
    <section id="category-section" className="p-5">
      <Container>
        <p className="text-sm text-zinc-700 mb-3">{title}</p>
        <div id="category-group" className="overflow-x-scroll flex lg:gap-4">
          {categories.map((category) => (
            <CategoryButton key={category.id} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategorySection;

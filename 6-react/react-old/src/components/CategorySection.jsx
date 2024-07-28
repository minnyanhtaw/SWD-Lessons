// eslint-disable-next-line no-unused-vars
import React from "react";
import CategoryButton from "./CategoryButton";
import Container from "./Container";

const CategorySection = () => {
  const title = "Product Categories";
  const categories = [
    "Electronics",
    "Jewelry",
    "Men's clothing",
    "Women's clothing",
  ];
  return (
    <section id="category-section" className="p-5">
      <Container>
        <p className="text-sm text-zinc-700 mb-3">{title}</p>
        <div id="category-group" className="overflow-x-scroll flex lg:gap-4">
          <CategoryButton name={"All"} current={true} />
          {categories.map((category) => (
            <CategoryButton name={category} key={category} current={false} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategorySection;

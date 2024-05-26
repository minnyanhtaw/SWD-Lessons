import { productGroup, productSelect, productTemplate } from "./selectors.js";

export const createProduct = ({ name, price }) => {
  // const option = document.createElement("option");
  // option.innerText = products.name;
  // option.value = products.id;
  // return option;
  const card = productTemplate.content.cloneNode(true);

  card.querySelector(".product-name").innerText = name;
  card.querySelector(".product-price").innerText = price;
  return card;
};

export const productRender = (products) => {
  productGroup.innerHTML = "";
  productSelect.innerHTML = "";
  products.forEach(({ name, id, price }) => {
    productSelect.append(new Option(name, id));
    productGroup.append(createProduct({ name, price }));
  });
};

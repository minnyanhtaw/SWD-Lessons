import React, { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProduct] = useState([
    {
      id: 1,
      name: "Apple",
      price: 500,
      stock: 30,
    },
    {
      id: 2,
      name: "Orange",
      price: 600,
      stock: 23,
    },
    {
      id: 3,
      name: "Mango",
      price: 400,
      stock: 10,
    },
    {
      id: 4,
      name: "Banana",
      price: 700,
      stock: 40,
    },
    {
      id: 5,
      name: "Lemon",
      price: 300,
      stock: 48,
    },
  ]);

  const addProduct = (newProduct) => {
    setProduct([...products, newProduct]);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

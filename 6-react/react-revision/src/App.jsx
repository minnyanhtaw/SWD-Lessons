import React, { useState } from "react";
import List from "./components/List";
import ProductForm from "./components/ProductForm";
import Clicker from "./components/Clicker";
import CreateForm from "./components/CreateForm";

function App() {
  const [products, setProduct] = useState([
    {
      id: 1,
      name: "Laptop",
      price: 999.99,
      stock: 25,
    },
    {
      id: 2,
      name: "Smartphone",
      price: 699.99,
      stock: 50,
    },
    {
      id: 3,
      name: "Headphones",
      price: 199.99,
      stock: 75,
    },
    {
      id: 4,
      name: "Smartwatch",
      price: 299.99,
      stock: 30,
    },
    {
      id: 5,
      name: "Tablet",
      price: 399.99,
      stock: 40,
    },
  ]);

  const addProduct = (newProduct) => {
    setProduct(...products, newProduct);
  };

  return (
    <div>
      <Clicker />
      <h1>Product List</h1>
      {products.map((product) => (
        <List key={product.id} {...product} />
      ))}
      {/* <ProductForm /> */}
      <CreateForm />
    </div>
  );
}

export default App;

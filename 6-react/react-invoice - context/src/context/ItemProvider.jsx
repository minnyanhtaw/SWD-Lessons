import React, { createContext, useState } from "react";

export const ItemContext = createContext();

const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, amount) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          const quantity = item.quantity + amount;
          const cost = quantity * item.product.price;
          return { ...item, quantity, cost };
        }
        return item;
      })
    );
  };

  return (
    <ItemContext.Provider
      value={{ addItem, items, removeItem, updateQuantity }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export default ItemProvider;

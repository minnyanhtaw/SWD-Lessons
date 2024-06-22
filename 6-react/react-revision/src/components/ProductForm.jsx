import React from "react";

function ProductForm() {
  return (
    <div>
      <input required type="text" placeholder="product name" />
      <input required type="text" placeholder="price" />
      <input required type="text" placeholder="Stock" />
      <button>Add</button>
    </div>
  );
}

export default ProductForm;

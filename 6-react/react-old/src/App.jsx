import React from "react";

const App = () => {
  const title = "Product Categories";
  const categories = [
    "Electronics",
    "Jewelry",
    "Men's clothing",
    "Women's clothing",
  ];
  return (
    <div className="p-5">
      <p className="text-3xl font-bold mb-5 text-gray-700">{title}</p>
      <div className="overflow-x-scroll flex ">
        {categories.map((category) => (
          <button
            key={category}
            className="border rounded text-nowrap border-black p-2 me-2"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;

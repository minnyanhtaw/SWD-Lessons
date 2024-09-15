import React from "react";

const ProductListEmptyStage = () => {
  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hidden last:table-row">
      <td colSpan={5} className=" text-center px-6 py-4">
        There is no product
      </td>
    </tr>
  );
};

export default ProductListEmptyStage;

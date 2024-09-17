import React from "react";

const ProductEditCardSkeleton = () => {
  return (
    <form className="max-w-sm animate-pulse">
      <div className="mb-5">
        <div className="h-4 bg-gray-300 rounded w-32 mb-2"></div>
        <div className="h-10 bg-gray-200 rounded w-full"></div>
      </div>

      <div className="mb-5">
        <div className="h-4 bg-gray-300 rounded w-32 mb-2"></div>
        <div className="h-10 bg-gray-200 rounded w-full"></div>
      </div>

      <div className="flex items-start mb-5">
        <div className="h-4 w-4 bg-gray-300 rounded mr-2"></div>
        <div className="h-4 bg-gray-300 rounded w-40"></div>
      </div>

      <div className="flex items-start mb-5">
        <div className="h-4 w-4 bg-gray-300 rounded mr-2"></div>
        <div className="h-4 bg-gray-300 rounded w-40"></div>
      </div>

      <div className="flex items-center gap-2">
        <div className="h-10 bg-gray-300 rounded w-24"></div>
        <div className="h-10 bg-gray-300 rounded w-32"></div>
      </div>
    </form>
  );
};

export default ProductEditCardSkeleton;

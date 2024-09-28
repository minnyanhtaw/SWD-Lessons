import React from "react";

const VoucherDetailCardSkeleton = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-50 shadow-lg rounded-lg my-10 animate-pulse">
      {/* Voucher Header Skeleton */}
      <div className="border-b pb-4 mb-6 flex justify-between items-center">
        <div className="h-6 bg-gray-300 rounded w-1/3"></div>
        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
      </div>

      {/* Customer Info Skeleton */}
      <div className="bg-white p-6 mb-6 rounded-lg shadow-sm border border-gray-200">
        <div className="h-5 bg-gray-300 rounded w-2/3 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
      </div>

      {/* Product Records Skeleton */}
      <div className="bg-white p-6 mb-6 rounded-lg shadow-sm border border-gray-200">
        <div className="h-5 bg-gray-300 rounded w-1/3 mb-4"></div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-gray-100 p-4 rounded-lg"
            >
              <div className="w-2/3">
                <div className="h-4 bg-gray-300 rounded mb-2 w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
              <div className="w-1/3 text-right">
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Voucher Summary Skeleton */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="h-5 bg-gray-300 rounded w-1/3 mb-4"></div>
        <div className="flex justify-between mb-2">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/5"></div>
        </div>
        <div className="flex justify-between mb-2">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/5"></div>
        </div>
        <div className="flex justify-between font-semibold text-lg">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/5"></div>
        </div>
      </div>
    </div>
  );
};

export default VoucherDetailCardSkeleton;

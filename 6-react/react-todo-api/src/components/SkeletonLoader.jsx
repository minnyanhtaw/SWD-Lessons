import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="grid grid-cols-1 gap-2">
      <div className="p-3 border-2 rounded border-zinc-700 flex justify-between items-center animate-pulse">
        <div className="flex gap-3 items-center">
          <div className="w-4 h-4 bg-gray-400 rounded"></div>

          <div className="w-32 h-4 bg-gray-400 rounded"></div>
        </div>

        <div className="w-12 h-6 bg-red-400 rounded"></div>
      </div>

      <div className="p-3 border-2 rounded border-zinc-700 flex justify-between items-center animate-pulse">
        <div className="flex gap-3 items-center">
          <div className="w-4 h-4 bg-gray-400 rounded"></div>

          <div className="w-32 h-4 bg-gray-400 rounded"></div>
        </div>

        <div className="w-12 h-6 bg-red-400 rounded"></div>
      </div>

      <div className="p-3 border-2 rounded border-zinc-700 flex justify-between items-center animate-pulse">
        <div className="flex gap-3 items-center">
          <div className="w-4 h-4 bg-gray-400 rounded"></div>

          <div className="w-32 h-4 bg-gray-400 rounded"></div>
        </div>

        <div className="w-12 h-6 bg-red-400 rounded"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;

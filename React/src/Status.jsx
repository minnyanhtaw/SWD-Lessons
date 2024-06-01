import React from "react";

const Status = () => {
  return (
    <div className="flex justify-between mb-5">
      <h2 className="font-bold text-zinc-700">Your List</h2>
      <p className="font-bold text-white bg-zinc-700 px-2 rounded-full py-1">
        Done(<span id="doneCount">0</span>/<span id="totalCount">0</span>)
      </p>
    </div>
  );
};

export default Status;

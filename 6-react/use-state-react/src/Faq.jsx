import React, { useState } from "react";

const Faq = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-10">
      <h1 className="text-3xl border border-black p-5">What is react</h1>
      <p className="p-5 bg-zinc-300">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
        mollitia, recusandae repellat quam beatae aut laudantium quod earum sit
        labore praesentium molestias eius a nesciunt natus commodi deserunt
        perferendis reiciendis.
      </p>
    </div>
  );
};

export default Faq;

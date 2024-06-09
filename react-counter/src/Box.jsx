import React, { useState } from "react";

const Box = (props) => {
  // const [hide, setHide] = useState(true);

  const handlerOpen = () => {
    setHide(false);
  };

  const handlerClose = () => {
    setHide(true);
  };

  const handlerToggle = () => {
    // setHide(!hide);
    // console.log("u click box", props.id);
    props.clickBox(props.id);
  };

  return (
    <div className=" grid grid-cols-2 px-5">
      <button
        onClick={handlerToggle}
        className=" flex items-center justify-between col-span-2 border rounded text-white bg-blue-600  p-2 duration-75 active:scale-95"
      >
        <h1 className="">{props.question}</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`${!props.hide && "rotate-90"} size-4 duration-200`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      <div
        className={`${
          props.hide && "hidden"
        } col-span-2 border p-5 bg-zinc-200 rounded `}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni
          earum modi rerum quo nulla aut omnis, dolorum deserunt officiis odit
          et doloremque itaque doloribus, recusandae asperiores, iusto vel qui!
        </p>
      </div>
    </div>
  );
};

export default Box;

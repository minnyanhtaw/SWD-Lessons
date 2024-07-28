/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ currentPageTitle }) => {
  return (
    <div
      className="flex gap-3 mb-5 text-sm
    "
    >
      <Link to={"/"} className="text-zinc-400 font-semibold">
        Home
      </Link>
      <span>/</span>
      <p className=" font-semibold">{currentPageTitle}</p>
    </div>
  );
};

export default Breadcrumb;

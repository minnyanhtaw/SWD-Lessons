import React from "react";
import { HiChevronRight, HiOutlineHome } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Breadcrumb = ({ currentPageTitle }) => {
  return (
    <div className=" mb-5">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="inline-flex gap-2 items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <HiOutlineHome />
              Home
            </Link>
          </li>
          <HiChevronRight />
          <li>
            <div className="flex items-center">{currentPageTitle}</div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;

import React, { useRef, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import {
  HiOutlinePencil,
  HiOutlinePlus,
  HiOutlineTrash,
} from "react-icons/hi2";
import useSWR, { SWRConfig } from "swr";
import ProductListSkeleton from "./ProductListSkeleton";
import ProductListEmptyStage from "./ProductListEmptyStage";
import ProductRow from "./ProductRow";
import { Link } from "react-router-dom";

const fetcher = (url) => fetch(url).then((res) => res.json());

const ProductList = () => {
  const [search, setSearch] = useState("");
  const { data, isLoading, error } = useSWR(
    search
      ? `${import.meta.env.VITE_API_URL}/products?product_name_like=${search}`
      : import.meta.env.VITE_API_URL + "/products",
    fetcher
  );
  const searchInput = useRef();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleClearSearch = () => {
    searchInput.current.value = "";
    setSearch("");
  };

  // console.log(import.meta.env.VITE_API_URL);
  return (
    <div>
      <div className=" flex justify-between">
        <div>
          <div className="relative mb-3">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <HiOutlineSearch />
            </div>
            <input
              type="text"
              ref={searchInput}
              onChange={handleSearch}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Product"
            />
            {search && (
              <button
                onClick={handleClearSearch}
                className="absolute top-0 bottom-0 right-2 m-auto bg-red-200 h-4 flex justify-center items-center w-4 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-3 stroke-red-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
        <div>
          <Link
            to={"/product/create"}
            type="submit"
            className="text-white flex gap-2 items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add new product <HiOutlinePlus />
          </Link>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className=" px-6 py-3">#</th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Price
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Created at
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <ProductListSkeleton />
            ) : data.length === 0 ? (
              <ProductListEmptyStage />
            ) : (
              data.map((product) => (
                <ProductRow product={product} key={product.id} />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;

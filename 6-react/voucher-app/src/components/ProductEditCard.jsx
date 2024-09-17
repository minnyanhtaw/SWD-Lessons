import React, { useState } from "react";
import Container from "./Container";
import { useForm } from "react-hook-form";
import { zoomies } from "ldrs";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import useSWR from "swr";
import ProductEditCardSkeleton from "./ProductEditCardSkeleton";

zoomies.register();

const fetcher = (url) => fetch(url).then((res) => res.json());

const ProductEditCard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { id } = useParams();

  const { data, isLoading, error } = useSWR(
    import.meta.env.VITE_API_URL + `/products/${id}`,
    fetcher
  );

  const [isSending, setIsSending] = useState(false);

  const navigate = useNavigate();

  const handleCreateProduct = async (data) => {
    // console.log(data);
    setIsSending(true);
    await fetch(import.meta.env.VITE_API_URL + "/products/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_name: data.product_name,
        price: data.price,
        created_at: new Date().toISOString(),
      }),
    });
    setIsSending(false);
    reset();
    if (data.back_to_product_list) {
      navigate("/product");
    }
    toast.success("Product updated successfully", {
      position: "bottom-right",
    });
  };

  return (
    <div>
      <h1 className=" text-xl font-bold">Update Product</h1>
      <p className="mb-5 text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eos eum
        illum omnis voluptate tenetur quia esse ea. Sed culpa sequi molestias
        vero obcaecati eveniet earum amet libero harum ipsam.
      </p>

      {isLoading ? (
        <ProductEditCardSkeleton />
      ) : (
        <form className="max-w-sm" onSubmit={handleSubmit(handleCreateProduct)}>
          <div className="mb-5">
            <label
              htmlFor="new_product_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              New Product Name
            </label>
            <input
              type="text"
              {...register("product_name", {
                required: true,
              })}
              id="new-product-name"
              className={`bg-gray-50 border ${
                errors.product_name
                  ? " border-red-500 focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500"
                  : "focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              } border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500`}
              placeholder="eg. apple"
              defaultValue={data.product_name}
            />
            {errors?.product_name?.type === "required" && (
              <p className="text-red-500 text-sm">Product name is required</p>
            )}
          </div>

          <div className="mb-5">
            <label
              htmlFor="new_product_price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              New Product Price
            </label>
            <input
              type="number"
              id="new-product-price"
              {...register("price", {
                required: true,
                min: 1,
              })}
              className={`bg-gray-50 border ${
                errors.price
                  ? " border-red-500 focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500"
                  : "focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              } border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500`}
              placeholder="eg. 500"
              defaultValue={data.price}
            />
            {errors?.price?.type === "required" && (
              <p className="text-red-500 text-sm">Product price is required</p>
            )}
            {errors?.price?.type === "min" && (
              <p className="text-red-500 text-sm">
                Price must be greater than 0
              </p>
            )}
          </div>
          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input
                id="all_correct"
                {...register("all_correct")}
                type="checkbox"
                defaultValue
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label
              htmlFor="all_correct"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Make sure all field are correct
            </label>
          </div>

          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input
                id="back_to_product_list"
                {...register("back_to_product_list")}
                type="checkbox"
                defaultValue
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                defaultChecked
              />
            </div>
            <label
              htmlFor="back_to_product_list"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Back to product lists after saving
            </label>
          </div>

          <div className="flex items-center gap-2 ">
            <Link
              to={"/product"}
              className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {isSending ? (
                <l-zoomies
                  size="80"
                  stroke="5"
                  bg-opacity="0.1"
                  speed="1.4"
                  color="white"
                ></l-zoomies>
              ) : (
                "Update Product"
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ProductEditCard;

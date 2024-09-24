import React from "react";
import { useForm } from "react-hook-form";
import SaleForm from "./SaleForm";

const VoucherInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  function generateInvoiceNumber() {
    // Get the current date
    const date = new Date();

    // Format the date as YYYYMMDD
    const formattedDate = date.toISOString().slice(0, 10).replace(/-/g, "");

    // Generate a random number between 1000 and 9999
    const randomNumber = Math.floor(1000 + Math.random() * 9000);

    // Combine the formatted date and the random number
    const invoiceNumber = `INV-${formattedDate}-${randomNumber}`;

    return invoiceNumber;
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} id="infoForm">
        <div className="grid grid-cols-4 gap-4">
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Voucher ID
            </label>
            <input
              type="text"
              defaultValue={generateInvoiceNumber()}
              {...register("voucher_id", {
                required: true,
              })}
              className={`bg-gray-50 border ${
                errors.voucher_id
                  ? " border-red-500 focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500"
                  : "focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              } border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500`}
              placeholder=""
            />
            {errors?.voucher_id?.type === "required" && (
              <p className="text-red-500 text-sm">Voucher ID is required</p>
            )}
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Customer Name
            </label>
            <input
              type="text"
              {...register("customer_name", {
                required: true,
              })}
              className={`bg-gray-50 border ${
                errors.customer_name
                  ? " border-red-500 focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500"
                  : "focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              } border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500`}
              placeholder=""
            />
            {errors?.customer_name?.type === "required" && (
              <p className="text-red-500 text-sm">Customer name is required</p>
            )}
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Customer Email
            </label>
            <input
              type="email"
              {...register("customer_email", {
                required: true,
              })}
              className={`bg-gray-50 border ${
                errors.customer_email
                  ? " border-red-500 focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500"
                  : "focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              } border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500`}
              placeholder=""
            />
            {errors?.customer_email?.type === "required" && (
              <p className="text-red-500 text-sm">Customer email is required</p>
            )}
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Sale Date
            </label>
            <input
              type="date"
              defaultValue={new Date().toISOString().slice(0, 10)}
              {...register("sale_date", {
                required: true,
              })}
              className={`bg-gray-50 border ${
                errors.sale_date
                  ? " border-red-500 focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500"
                  : "focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              } border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500`}
              placeholder="eg. apple"
            />
            {errors?.sale_date?.type === "required" && (
              <p className="text-red-500 text-sm">Sale date is required</p>
            )}
          </div>
        </div>
      </form>

      <SaleForm />

      <button
        type="submit"
        form="infoForm"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
      >
        Save Product
      </button>
    </div>
  );
};

export default VoucherInfo;

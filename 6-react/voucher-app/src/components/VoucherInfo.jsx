import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SaleForm from "./SaleForm";
import VoucherTable from "./VoucherTable";
import useRecordStore from "../stores/useRecordStore";
import toast from "react-hot-toast";
import { tailspin } from "ldrs";
import { useNavigate } from "react-router-dom";
tailspin.register();

const VoucherInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isSending, setIsSending] = useState(false);

  const { records, resetRecords } = useRecordStore();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setIsSending(true);

    const total = records.reduce((acc, record) => acc + record.cost, 0);
    const tax = total * 0.05;
    const netTotal = total + tax;

    const currentVoucher = { ...data, records, total, tax, netTotal };
    await fetch(import.meta.env.VITE_API_URL + "/vouchers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentVoucher),
    });
    toast.success("Voucher created successfully", {
      position: "bottom-right",
    });

    reset();
    resetRecords();

    setIsSending(false);

    navigate("/voucher");
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

      <VoucherTable />

      <div className="flex items-center justify-end gap-3 mt-5">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="all_correct"
              form="infoForm"
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
        <button
          type="submit"
          form="infoForm"
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
        >
          {isSending ? (
            <l-tailspin
              size="20"
              stroke="5"
              speed="0.9"
              color="white"
            ></l-tailspin>
          ) : (
            "Confirm Voucher"
          )}
        </button>
      </div>
    </div>
  );
};

export default VoucherInfo;

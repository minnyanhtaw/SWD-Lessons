import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import VoucherDetailCardSkeleton from "./VoucherDetailCardSkeleton";

const fetcher = (url) => fetch(url).then((res) => res.json());
const VoucherDetailCard = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useSWR(
    import.meta.env.VITE_API_URL + `/vouchers/${id}`,
    fetcher
  );

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {isLoading ? (
        <VoucherDetailCardSkeleton />
      ) : (
        <div className="max-w-5xl mx-auto p-6 bg-gray-50 shadow-lg rounded-lg my-10 print:my-5">
          <div className="border-b pb-4 mb-6 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-indigo-600">
              Voucher # {data.voucher_id}
            </h1>
            <p className="text-gray-400">
              Sale Date: {new Date(data.sale_date).toLocaleDateString()}
            </p>
          </div>

          <div className="bg-white p-6 mb-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Customer Information
            </h2>
            <div className="text-gray-600 flex items-center gap-3">
              <p className="font-bold">Name : </p>
              <p>{data.customer_name}</p>
            </div>
            <div className="text-gray-600 flex items-center gap-3">
              <p className="font-bold">Email : </p>
              <p>{data.customer_email}</p>
            </div>
          </div>

          {/* Product Records */}
          <div className="bg-white p-6 mb-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Products Purchased
            </h2>
            <div className="space-y-4">
              {data.records.map((record) => (
                <div
                  key={record.id}
                  className="flex justify-between items-center bg-gray-100 p-4 rounded-lg"
                >
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">
                      {record.product_name}
                    </h3>
                    <p className="text-gray-500">Quantity: {record.quantity}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-gray-700 flex items-center gap-3">
                      <p className=" font-bold">Price : </p>
                      <p>$ {record.price.toFixed(2)}</p>
                    </div>
                    <div className="text-gray-700 flex items-center gap-3">
                      <p className=" font-bold">Cost : </p>
                      <p>$ {record.cost.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Summary
            </h2>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal:</span>
              <span className="text-gray-800">${data.total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Tax:</span>
              <span className="text-gray-800">${data.tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span className="text-gray-600">Net Total:</span>
              <span className="text-gray-800">${data.netTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}
      <button
        onClick={handlePrint}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded print:hidden"
      >
        Print
      </button>
    </>
  );
};

export default VoucherDetailCard;

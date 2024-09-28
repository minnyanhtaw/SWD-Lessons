import React, { useState } from "react";
import ShowDate from "./ShowDate";
import { bouncy } from "ldrs";
import { useSWRConfig } from "swr";
import { Link } from "react-router-dom";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";

bouncy.register();
const VoucherListRow = ({
  voucher: { voucher_id, customer_name, customer_email, id, sale_date },
}) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const { mutate } = useSWRConfig();

  const handleDeleteBtn = async () => {
    setIsDeleting(true);

    await fetch(import.meta.env.VITE_API_URL + `/vouchers/${id}`, {
      method: "DELETE",
    });

    toast.success("Voucher deleted successfully", {
      position: "bottom-right",
    });
    mutate(import.meta.env.VITE_API_URL + "/vouchers");
  };
  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <th className=" px-6 py-4">{voucher_id}</th>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {customer_name}
      </th>
      <td className="px-6 py-4 text-end">{customer_email}</td>
      <td className="px-6 py-4 text-end">
        <ShowDate timestamp={sale_date} />
      </td>
      <td className="px-6 py-4">
        <div className="flex justify-end items-center rounded" role="group">
          <Link
            to={`/voucher/detail/${id}`}
            className="h-10 w-10 grid place-items-center py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <HiOutlineViewfinderCircle />
          </Link>
          <button
            type="button"
            onClick={handleDeleteBtn}
            className="w-10 h-10 grid place-items-center text-sm font-medium text-red-500 bg-white border border-gray-200 rounded-e hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            {isDeleting ? (
              <l-bouncy size="20" speed="1.75" color="red"></l-bouncy>
            ) : (
              <HiOutlineTrash />
            )}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default VoucherListRow;

import React from "react";
import useRecordStore from "../stores/useRecordStore";
import VoucherRow from "./VoucherRow";

const VoucherTable = () => {
  const { records } = useRecordStore();
  return (
    <div className=" relative shadow-md sm:rounded-lg overflow-hidden">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
          <tr className=" ">
            <th scope="col" className="px-6 py-4">
              #
            </th>
            <th scope="col" className="px-6 py-4">
              Product name
            </th>
            <th scope="col" className="px-6 py-4 text-end">
              Price
            </th>
            <th scope="col" className="px-6 py-4 text-end">
              Quantity
            </th>
            <th scope="col" className="px-6 py-4 text-end">
              Cost
            </th>
            <th scope="col" className="px-6 py-4 text-end">
              {""}
            </th>
          </tr>
        </thead>
        <tbody id="recordGroup">
          <tr className="hidden last:table-row border-b">
            <td colSpan={6} className="px-6 py-4 text-center">
              There is no record. Buy Something
            </td>
          </tr>
          {records.map((record,index) => (
            <VoucherRow key={record.id} record={record} index={index} />
          ))}
        </tbody>
        <tfoot>
          <tr className="border-b">
            <td className="px-6 py-4 text-center" colSpan={4}>
              Total
            </td>
            <td className="px-6 py-4 text-end" id="recordTotal">
              0
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default VoucherTable;

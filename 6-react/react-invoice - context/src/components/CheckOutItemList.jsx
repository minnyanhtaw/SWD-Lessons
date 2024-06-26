import React, { useContext } from "react";
import { Button, Table } from "flowbite-react";

import List from "./List";
import { GeneralContext } from "../context/GeneralProvider";
import ItemProvider, { ItemContext } from "../context/ItemProvider";

const CheckOutItemList = () => {
  const { items, removeItem, updateQuantity } = useContext(ItemContext);
  const total = items.reduce((pv, cv) => pv + parseInt(cv.cost), 0);
  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell className=" text-end">Price</Table.HeadCell>
          <Table.HeadCell className=" text-end">Quantity</Table.HeadCell>
          <Table.HeadCell className=" text-end">Cost</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {items.map((item) => (
            <List key={item.id} item={item} />
          ))}

          {items.length === 0 && (
            <Table.Row>
              <Table.Cell
                colSpan={5}
                className="whitespace-nowrap  text-center font-medium text-gray-900 dark:text-white"
              >
                There is no record
              </Table.Cell>
            </Table.Row>
          )}

          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell
              colSpan={3}
              className=" text-center font-bold text-black"
            >
              Total
            </Table.Cell>
            <Table.Cell className=" text-end">$ {total}</Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default CheckOutItemList;

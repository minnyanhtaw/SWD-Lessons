import React from "react";
import { Button, Table } from "flowbite-react";

import List from "./List";

const CheckOutItemList = ({ items }) => {
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
        </Table.Body>
      </Table>
    </div>
  );
};

export default CheckOutItemList;

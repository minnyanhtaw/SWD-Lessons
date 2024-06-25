import { Button, Table } from "flowbite-react";
import React from "react";
import { HiMiniPlus } from "react-icons/hi2";
import { HiMiniMinus } from "react-icons/hi2";

const List = ({ item, removeItem }) => {
  const handleRemoveItem = () => {
    if (confirm("Delete ?")) {
      removeItem(item.id);
    }
  };
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {item.product.name}
      </Table.Cell>
      <Table.Cell className=" text-end">$ {item.product.price}</Table.Cell>
      <Table.Cell className=" text-end">
        <div className=" flex justify-end items-center gap-2">
          <Button size="xs" color="gray">
            <HiMiniMinus />
          </Button>
          <span>{item.quantity}</span>
          <Button size="xs" color="gray">
            <HiMiniPlus />
          </Button>
        </div>
      </Table.Cell>
      <Table.Cell className=" text-end">$ {item.cost}</Table.Cell>
      <Table.Cell
        onClick={handleRemoveItem}
        className="font-medium text-blue-600 hover:underline "
      >
        Remove
      </Table.Cell>
    </Table.Row>
  );
};

export default List;

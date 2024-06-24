import React from "react";
import { Button, Label, Select, TextInput } from "flowbite-react";

const CheckOutForm = ({ products }) => {
  return (
    <>
      <form className=" w-full block">
        <div className=" grid grid-cols-5 gap-2">
          <div className=" col-span-2">
            <div className="mb-2 block">
              <Label value="Select Product" />
            </div>
            <Select id="countries" required>
              {products.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </Select>
          </div>

          <div className=" col-span-2">
            <div className="mb-2 block">
              <Label value="Quantity" />
            </div>
            <TextInput id="quantity" type="number" sizing="md" />
          </div>

          <div className=" col-span-1">
            <Button
              color="blue"
              className="h-full w-full text-center items-center"
            >
              Buy
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CheckOutForm;

import React from "react";
import SubHeading from "./SubHeading";
import { TextInput, Label, Button } from "flowbite-react";

const CreateProductForm = () => {
  return (
    <div>
      <SubHeading>Add New Product</SubHeading>

      <form action="" className=" mt-3">
        <div className=" grid grid-cols-3 gap-3">
          <div className=" col-span-full">
            <div className="mb-2 block">
              <Label htmlFor="name" value="Product Name" />
            </div>
            <TextInput
              id="name"
              type="text"
              placeholder="eg. Apple"
              required
              shadow
            />
          </div>

          <div className=" col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="price" value="Product Price" />
            </div>
            <TextInput
              id="price"
              type="number"
              placeholder="eg. 200"
              required
              shadow
            />
          </div>

          <div className=" col-span-1">
            <div className="mb-2 block">
              <Label htmlFor="stock" value="Stock" />
            </div>
            <TextInput
              id="stock"
              type="number"
              placeholder="eg. 50"
              required
              shadow
            />
          </div>

          <div className="col-span-full">
            <Button type="submit">Create</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProductForm;

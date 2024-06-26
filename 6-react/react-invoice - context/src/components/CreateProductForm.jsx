import React, { useRef } from "react";
import SubHeading from "./SubHeading";
import { TextInput, Label, Button } from "flowbite-react";

const CreateProductForm = ({ addProduct }) => {
  const formRef = useRef();

  const handleForm = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);

    const newProduct = {
      id: Date.now(),
      name: formData.get("name"),
      price: parseInt(formData.get("price")),
      stock: parseInt(formData.get("stock")),
    };
    addProduct(newProduct);
    formRef.current.reset();
  };

  return (
    <div>
      <SubHeading>Add New Product</SubHeading>

      <form onSubmit={handleForm} ref={formRef} action="" className=" mt-3">
        <div className=" grid grid-cols-3 gap-3">
          <div className=" col-span-full">
            <div className="mb-2 block">
              <Label htmlFor="name" value="Product Name" />
            </div>
            <TextInput
              name="name"
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
              name="price"
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
              name="stock"
              id="stock"
              type="number"
              placeholder="eg. 50"
              required
              shadow
            />
          </div>

          <div className="col-span-full">
            <Button className="w-full" type="submit">
              Add New
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProductForm;

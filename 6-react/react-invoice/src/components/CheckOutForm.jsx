import React, { useRef } from "react";
import { Button, Label, Select, TextInput } from "flowbite-react";

const CheckOutForm = ({ products, addItem }) => {
  const selectRef = useRef();
  const quantityRef = useRef();
  const formRef = useRef();

  const handleForm = (event) => {
    event.preventDefault();

    const id = Date.now();
    const currentProduct = products.find(
      (product) => product.id === parseInt(selectRef.current.value)
    );
    const quantity = parseInt(quantityRef.current.value);
    const cost = parseInt(quantity * currentProduct.price);

    const newItem = {
      id,
      product: currentProduct,
      quantity,
      cost,
    };

    addItem(newItem);
    formRef.current.reset();

    // console.log(selectRef.current.value);
    // console.log(quantityRef.current.value);
  };

  return (
    <>
      <form ref={formRef} onSubmit={handleForm} className=" w-full block mb-5">
        <div className=" grid grid-cols-5 gap-2">
          <div className=" col-span-2">
            <div className="mb-2 block">
              <Label value="Select Product" />
            </div>
            <Select ref={selectRef} id="countries" required>
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
            <TextInput
              ref={quantityRef}
              id="quantity"
              type="number"
              sizing="md"
              required
            />
          </div>

          <div className=" col-span-1">
            <Button
              type="submit"
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

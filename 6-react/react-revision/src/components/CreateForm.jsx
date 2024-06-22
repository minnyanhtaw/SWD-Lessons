import React, { useRef } from "react";

function CreateForm() {
  const nameInput = useRef("");
  const priceInput = useRef(0);
  const stockInput = useRef(0);

  const handleForm = (event) => {
    console.log(nameInput.current.value);
    console.log(priceInput.current.value);
    console.log(stockInput.current.value);

    event.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleForm}>
        <input
          required
          type="text"
          ref={nameInput}
          placeholder="product name"
        />
        <input required type="number" ref={priceInput} placeholder="price" />
        <input required type="number" ref={stockInput} placeholder="Stock" />
        <button>Add</button>
      </form>
    </>
  );
}

export default CreateForm;

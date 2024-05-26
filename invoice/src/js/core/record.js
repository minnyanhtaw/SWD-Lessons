import { recordTotal, rowTemplate } from "./selectors.js";

export const createRecord = ({ id, name, price }, quantity) => {
  const rowCoast = price * quantity;
  const record = rowTemplate.content.cloneNode(true);

  record.querySelector(".row").setAttribute("row-product-id", id);
  record.querySelector(".row-product-name").innerText = name;
  record.querySelector(".row-product-price").innerText = price;
  record.querySelector(".row-quantity").innerText = quantity;
  record.querySelector(".row-coast").innerText = rowCoast;
  return record;
};

export const updateRecordTotal = () => {
  const allRowCoast = document.querySelectorAll(".row-coast");

  recordTotal.innerText = [...allRowCoast].reduce(
    (pv, { innerText }) => pv + parseFloat(innerText),
    0
  );
};

export const updateRecord = (productId, q) => {
  const row = document.querySelector(`[row-product-id='${productId}']`);
  const currentQuantity = row.querySelector(".row-quantity");
  const currentCoast = row.querySelector(".row-coast");
  currentQuantity.innerText = parseInt(currentQuantity.innerText) + q;

  const currentPrice = row.querySelector(".row-product-price");

  currentCoast.innerText = currentPrice.innerText * currentQuantity.innerText;
  updateRecordTotal();
};

export const deleteRecord = (event) => {
  // console.log(event.target);
  const row = event.target.closest(".row");
  // console.log(row);
  if (confirm("Are you sure to delete?")) {
    row.remove();
    updateRecordTotal();
  }
};

export const addRecordQuantity = (event) => {
  const row = event.target.closest(".row");
  const currentQuantity = row.querySelector(".row-quantity");
  const currentCoast = row.querySelector(".row-coast");

  currentQuantity.innerText = parseInt(currentQuantity.innerText) + 1;

  const currentPrice = row.querySelector(".row-product-price");

  currentCoast.innerText = currentPrice.innerText * currentQuantity.innerText;
  updateRecordTotal();
};

export const subRecordQuantity = (event) => {
  const row = event.target.closest(".row");
  const currentQuantity = row.querySelector(".row-quantity");
  const currentCoast = row.querySelector(".row-coast");

  if (currentQuantity.innerText > 1) {
    currentQuantity.innerText = parseInt(currentQuantity.innerText) - 1;

    const currentPrice = row.querySelector(".row-product-price");

    currentCoast.innerText = currentPrice.innerText * currentQuantity.innerText;
    updateRecordTotal();
  } else {
    deleteRecord(event);
  }
};

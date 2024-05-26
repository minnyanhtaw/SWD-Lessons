import { createProduct, productRender } from "./product.js";
import {
  addRecordQuantity,
  createRecord,
  deleteRecord,
  subRecordQuantity,
  updateRecord,
  updateRecordTotal,
} from "./record.js";
import {
  createForm,
  inventorySheet,
  newProductCreateForm,
  productGroup,
  productSelect,
  recordTotal,
  rowGroup,
} from "./selectors.js";
import { products } from "./variables.js";

export const createFormHandler = (e) => {
  console.log("u click buy btn");
  e.preventDefault();

  const formData = new FormData(createForm);
  const currentProductId = parseInt(formData.get("productSelect"));
  const currentQuantity = parseInt(formData.get("inputQuantity"));

  //   console.log(currentProductId);
  //   console.log(currentQuantity);

  const currentProduct = products.find((el) => el.id === currentProductId);

  // is Existed row
  const isExistedRow = rowGroup.querySelector(
    `[row-product-id='${currentProductId}']`
  );
  // console.log(isExistedRow);

  if (isExistedRow) {
    // const currentQuantityElement = isExistedRow.querySelector(".row-quantity");
    // const currentCoast = isExistedRow.querySelector(".row-coast");
    // const currentPrice = isExistedRow.querySelector(".row-product-price");

    // // console.log("abc" + currentPrice.innerText);
    // // console.log("currentquantityelement" + currentQuantityElement.innerText);

    // currentQuantityElement.innerText =
    //   parseInt(currentQuantityElement.innerText) + currentQuantity;

    // currentCoast.innerText =
    //   currentPrice.innerText * currentQuantityElement.innerText;
    updateRecord(isExistedRow.getAttribute("row-product-id"), currentQuantity);
  } else {
    rowGroup.append(createRecord(currentProduct, currentQuantity));
  }

  createForm.reset();
  updateRecordTotal();
};

export const rowGroupHandler = (event) => {
  if (event.target.classList.contains("row-del-btn")) {
    console.log("u del row");
    deleteRecord(event);
  } else if (event.target.classList.contains("row-q-add")) {
    // console.log("u click add");
    // addRecordQuantity(event);
    updateRecord(
      event.target.closest(".row").getAttribute("row-product-id"),
      1
    );
  } else if (event.target.classList.contains("row-q-sub")) {
    // console.log("u click sub");
    // subRecordQuantity(event);
    updateRecord(
      event.target.closest(".row").getAttribute("row-product-id"),
      -1
    );
  }
};

export const manageInventoryHandler = () => {
  console.log("u clic manage inventory");
  inventorySheet.classList.toggle("-translate-x-full");
};

export const newProductCreateFormHandler = (event) => {
  event.preventDefault();
  console.log("u click submit");
  const formData = new FormData(newProductCreateForm);
  const newProduct = {
    id: Date.now(),
    name: formData.get("new_product_name"),
    price: formData.get("new_product_price"),
  };

  // productGroup.append(createProduct(newProduct));
  // productSelect.append(new Option(newProduct.name, newProduct.id));
  products.push(newProduct);
  productRender(products);
  newProductCreateForm.reset();
};

export const printBtnHandler = () => {
  console.log("you click printBtn");
  window.print();
};

import {
  createFormHandler,
  manageInventoryHandler,
  newProductCreateFormHandler,
  printBtnHandler,
  rowGroupHandler,
} from "./handlers.js";
import {
  createForm,
  inventorySheetCloseBtn,
  manageInventory,
  newProductCreateForm,
  printBtn,
  rowGroup,
} from "./selectors.js";

const listener = () => {
  createForm.addEventListener("submit", createFormHandler);
  rowGroup.addEventListener("click", rowGroupHandler);
  manageInventory.addEventListener("click", manageInventoryHandler);
  inventorySheetCloseBtn.addEventListener("click", manageInventoryHandler);
  newProductCreateForm.addEventListener("submit", newProductCreateFormHandler);
  printBtn.addEventListener("click", printBtnHandler);
};

export default listener;

import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

// const categories = [
//   "Electronics",
//   "Jewelry",
//   "Men's clothing",
//   "Women's clothing",
// ];

// const app = createElement(
//   "div",
//   { id: "category-section", className: "p-5" },
//   createElement("p", { className: "text-3xl" }, "Product Categories"),
//   categories.map((category) =>
//     createElement(
//       "button",
//       { className: "border-2 border-black p-2 me-2" },
//       category
//     )
//   )
// );

const root = document.querySelector("#root");

createRoot(root).render(<RouterProvider router={router} />);

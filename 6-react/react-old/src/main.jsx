import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ProductCart from "./components/ProductCart";
import ProductDetail from "./pages/ProductDetail";
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

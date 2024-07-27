import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ProductCart from "../components/ProductCart";
import ProductDetail from "../pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about-us",
    element: <AboutUs />,
  },

  {
    path: "product-cart",
    element: <ProductCart />,
  },

  {
    path: "product-detail",
    element: <ProductDetail />,
  },
]);

export default router;

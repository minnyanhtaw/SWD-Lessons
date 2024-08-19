import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ProductCart from "../components/ProductCart";
import ProductDetail from "../pages/ProductDetail";
import MainLayout from "../components/MainLayout";
import MyCart from "../pages/MyCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
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
        element: <MyCart />,
      },

      {
        path: "product-detail/:productSlug",
        element: <ProductDetail />,
      },
    ],
  },
]);

export default router;

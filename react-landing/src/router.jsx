import { createBrowserRouter } from "react-router-dom";
import Layout from "../src/components/common/Layout";
import MainPage from "./components/pages/MainPage";
import ProductsPage from "./components/pages/ProductsPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
    ],
  },
]);

export { router };

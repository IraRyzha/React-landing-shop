import { createBrowserRouter } from "react-router-dom";
import Layout from "../src/components/common/Layout";
import MainPage from "./components/pages/MainPage";
import ProductPage from "./components/pages/ProductPage";

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
        path: "product",
        element: <ProductPage />,
      },
    ],
  },
]);

export { router };

import { useState } from "react";
import useSWR from "swr";
import getProducts from "../../service/getProducts";
import Loader from "../Loader";
import ProductDialog from "../ProductDialog";
import ProductItem from "../ProductItem";

const ProductPage = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useSWR("/api/products", getProducts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState({});

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="w-full h-auto p-10">
      <h1 className="text-3xl font-bold mb-5">Products</h1>
      <div className="w-full h-auto flex flex-wrap gap-5">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="flex-1 w-auto lg:max-w-[25%] lg:min-w-[20%] md:max-w-[32%] md:min-w-[30%] sm:max-w-[50%] sm:min-w-[47%] max-w-[100%] min-w-[100%]"
            >
              <ProductItem
                key={product.id}
                type="base"
                product={product}
                onClick={() => {
                  setModalProduct(product);
                  setIsModalOpen(true);
                }}
              />
              {isModalOpen && (
                <ProductDialog
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                  currentProduct={modalProduct}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductPage;

import { useContext, useState } from "react";
import useSWR from "swr";
import { AppContext } from "../../context/MainContext";
import getProducts from "../../service/getProducts";
import CartDialog from "../cart/CartDialog";
import CartIcon from "../icons/cart-icon";
import Loader from "../Loader";
import ProductDialog from "../products/ProductDialog";
import ProductItem from "../products/ProductItem";

const ProductPage = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useSWR("/api/products", getProducts);
  const [isModalProductOpen, setIsModalProductOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState({});
  const { cart, isCartOpen, setIsCartOpen } = useContext(AppContext);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="w-full h-auto p-10 relative">
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
                  setIsModalProductOpen(true);
                }}
              />
            </div>
          );
        })}
      </div>
      {isModalProductOpen && (
        <ProductDialog
          isOpen={isModalProductOpen}
          onClose={() => setIsModalProductOpen(false)}
          currentProduct={modalProduct}
        />
      )}
      {isCartOpen && <CartDialog />}
      <div className="fixed bottom-5 right-5 ">
        <button type="button" onClick={() => setIsCartOpen(true)}>
          <CartIcon amount={cart.products.length} />
        </button>
      </div>
    </div>
  );
};

export default ProductPage;

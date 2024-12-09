import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext } from "react";
import { AppContext } from "../../context/MainContext";
import CloseButton from "../icons/close-button";
import ProductItem from "../products/ProductItem";

const CloseButtonn = ({ onClick }) => {
  return (
    <button
      type="button"
      className="-m-2 p-2 text-gray-400 hover:text-gray-500"
      onClick={onClick}
    >
      <CloseButton />
    </button>
  );
};

const CartDialog = () => {
  const { cart, isCartOpen, setIsCartOpen } = useContext(AppContext);
  return (
    <Transition.Root show={isCartOpen} as={Fragment}>
      <Dialog className="relative z-20" onClose={() => setIsCartOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-1000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-1000 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-1000 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                    <div className="flex-1 px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </Dialog.Title>

                        <div className="ml-3 flex h-7 items-center">
                          <CloseButtonn onClick={() => setIsCartOpen(false)} />
                        </div>
                      </div>

                      <div className="mt-8">
                        {cart.products.length ? (
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {cart.products.map((product) => (
                                <ProductItem
                                  key={product.id}
                                  type="cart"
                                  product={product}
                                />
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <p>Cart is empty</p>
                        )}
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${cart.totalPrice}</p>
                      </div>

                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6 flex justify-center w-full">
                        <button className="flex-1 flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                          Checkout
                        </button>
                      </div>

                      <div className="flex-1 mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => setIsCartOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default CartDialog;

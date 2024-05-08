import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
// import { StarIcon } from "@heroicons/react/24/outline";
import CloseButton from "../icons/close-button";
import ProductItem from "./ProductItem";

const ProductDialog = ({ isOpen, onClose, currentProduct }) => {
  return (
    <Transition
      show={isOpen}
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="opacity-0 translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-50"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-1"
    >
      <Dialog
        open={isOpen}
        onClose={onClose}
        className="pointer-events-none fixed inset-0 z-10 bg-none"
      >
        <Dialog.Panel className="relative w-screen h-screen bg-none flex items-center justify-center">
          <div className="fixed hidden md:block inset-0 w-full h-full bg-gray-500 opacity-75 transition-opacity "></div>
          <div className="pointer-events-none relative h-[40%] w-[50%] bg-white rounded-lg p-5">
            <CloseButton
              onClick={() => onClose()}
              className="pointer-events-auto absolute top-3 right-3"
            />
            <ProductItem type="modal" product={currentProduct} />
          </div>
        </Dialog.Panel>
      </Dialog>
    </Transition>
  );
};

export default ProductDialog;

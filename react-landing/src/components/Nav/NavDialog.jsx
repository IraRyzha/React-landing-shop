import { Dialog } from "@headlessui/react";
import CloseButton from "../icons/close-button";
import NavMenu from "./NavMenu";

const NavDialog = ({ isMobileMenuOpen, onClose }) => {
  return (
    <Dialog
      open={isMobileMenuOpen}
      onClose={onClose}
      className="absolute inset-y-0 w-screen h-screen z-50 "
    >
      <Dialog.Panel className="inset-y-0 w-screen h-screen bg-white">
        {/* <CloseButton onClick={onClose} className="absolute right-1" /> */}
        <NavMenu view="modal" closeButton={<CloseButton onClick={onClose} />} />
      </Dialog.Panel>
    </Dialog>
  );
};

export default NavDialog;

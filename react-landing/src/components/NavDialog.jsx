import { Dialog } from "@headlessui/react";
import CloseButton from "./icons/close-button";
import NavMenu from "./NavMenu";

const NavDialog = ({ isMobileMenuOpen, onClose }) => {
  return (
    <Dialog
      open={isMobileMenuOpen}
      onClose={onClose}
      className="absolute inset-y-0 w-screen h-screen bg-yellow-300"
    >
      <Dialog.Panel className="absolute inset-y-0 w-screen h-screen bg-yellow-300">
        <CloseButton onClick={onClose} className="absolute right-1" />
        <NavMenu view="mobile" />
      </Dialog.Panel>
    </Dialog>
  );
};

export default NavDialog;

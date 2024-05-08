import { useState } from "react";
import LoginButton from "../LoginButton";
import Logo from "../Logo";
import MenuButton from "../icons/menu-button";
import NavDialog from "./NavDialog";
import NavList from "./NavList";

/**
 * @param {{
 * view: string,
 * closeButton: any,
 * }} props
 */

const NavMenu = ({ view, closeButton }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const containerClassName =
    "absolute top-0 px-10 py-6 flex inset-x-0 justify-between items-center";

  const ordinaryNav = (
    <div className={containerClassName}>
      <Logo />
      <NavList view={view} />
      <LoginButton className={"hidden lg:flex "} />
      <MenuButton
        className="block lg:hidden"
        onClick={() => setIsMobileMenuOpen(true)}
      />
      <NavDialog
        isMobileMenuOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </div>
  );
  const modalNav = (
    <div className="px-8 py-6 ">
      <div className={containerClassName}>
        <Logo />
        {/* <CloseButton onClick={() => setIsMobileMenuOpen(false)} /> */}
        {closeButton}
      </div>
      <div className="flex flex-col gap-11 mt-7">
        <NavList view={view} />
        <div className="w-auto h-px bg-gray-300 mx-3 my-1"></div>
        <LoginButton className="flex self-start px-3 py-1" />
      </div>
    </div>
  );

  return (
    <>
      {view === "ordinary" && ordinaryNav}
      {view === "modal" && modalNav}
    </>
  );
};

export default NavMenu;

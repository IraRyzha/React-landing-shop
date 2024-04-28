import { useState } from "react";
import LoginButton from "./LoginButton";
import Logo from "./Logo";
import MenuButton from "./icons/menu-button";
import NavDialog from "./NavDialog";
import CloseButton from "./icons/close-button";
import clsx from "clsx";

const navMenuItems = [
  { name: "Product", href: "#", description: "" },
  { name: "Features", href: "#", description: "" },
  { name: "Marketplace", href: "#", description: "" },
  { name: "Company", href: "#", description: "" },
  { name: "Solutions", href: "#", description: "" },
];

/**
 * @param {{
 * view: string,
 * }} props
 */

const NavMenu = ({ view }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const containerClassName = clsx(
    "flex font-semibold",
    {
      desktop:
        "absolute top-0 inset-x-0 justify-between items-center px-9 py-6 ",
      mobile: "",
    }[view]
  );
  return (
    <div className={containerClassName}>
      <Logo />
      <nav className="flex-1 hidden lg:flex justify-center gap-5 lg:gap-12">
        {navMenuItems.map((item, index) => {
          return (
            <a
              key={index}
              href={item.href}
              className="hover:scale-105 ease-in-out"
            >
              {item.name}
            </a>
          );
        })}
      </nav>
      <LoginButton />
      {!isMobileMenuOpen && (
        <MenuButton
          onClick={() => {
            console.log("skljsds");
            setIsMobileMenuOpen(true);
          }}
        />
      )}
      {/* {isMobileMenuOpen && (
        <CloseButton onClick={() => setIsMobileMenuOpen(false)} />
      )} */}
      <NavDialog
        isMobileMenuOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </div>
  );
};

export default NavMenu;

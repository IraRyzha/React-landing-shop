import clsx from "clsx";
import { navMenuItems } from "../constants";

const NavList = ({ view }) => {
  const navClassName = clsx(
    "font-semibold",
    {
      ordinary: "flex-1 hidden lg:flex justify-center gap-5 lg:gap-12",
      modal: "flex flex-col gap-4 mt-11",
    }[view]
  );
  const navItemClassName = clsx(
    "font-semibold",
    {
      ordinary: "hover:scale-[1.03] ease-in-out",
      modal: "hover:bg-gray-100 px-3 py-1 ease-in-out",
    }[view]
  );
  return (
    <nav className={navClassName}>
      {navMenuItems.map((item, index) => {
        return (
          <a key={index} href={item.href} className={navItemClassName}>
            {item.name}
          </a>
        );
      })}
    </nav>
  );
};

export default NavList;

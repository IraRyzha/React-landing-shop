import { useState } from "react";
import { Outlet } from "react-router";
import NavMenu from "../NavMenu";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-auto max-h-max  relative font-sans">
      <NavMenu view="ordinary" />
      {/* {children} */}
      <Outlet />
    </div>
  );
};

//h-m

export default Layout;

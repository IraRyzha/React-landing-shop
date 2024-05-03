import { useState } from "react";
import { Outlet } from "react-router";
import GradientBottom from "../GradientBottom";
import GradientTop from "../GradientTop";
import NavMenu from "../Nav/NavMenu";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-auto max-h-max  relative font-sans py-20">
      <NavMenu view="ordinary" />
      {/* {children} */}
      <GradientTop />
      <Outlet />
      <GradientBottom />
    </div>
  );
};

//h-m

export default Layout;

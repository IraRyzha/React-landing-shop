import { useState } from "react";
import { Outlet } from "react-router";
import MainContext from "../../context/MainContext";
import GradientBottom from "../GradientBottom";
import GradientTop from "../GradientTop";
import NavMenu from "../navigation/NavMenu";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-auto max-h-max  relative font-sans py-20">
      <MainContext>
        <NavMenu view="ordinary" />
        {/* {children} */}
        <GradientTop />
        <Outlet />
        <GradientBottom />
      </MainContext>
    </div>
  );
};

//h-m

export default Layout;

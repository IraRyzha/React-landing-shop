import { useState } from "react";
import NavMenu from "../NavMenu";

const Layout = ({ children }) => {
  return (
    <div className="w-screen h-screen max-h-screen h-m relative font-sans">
      <NavMenu view="ordinary" />
      {children}
    </div>
  );
};

export default Layout;

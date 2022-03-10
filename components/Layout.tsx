import React from "react";
import Footer from "./Footer";
import Topbar from "./Topbar";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Topbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

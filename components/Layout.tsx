import React from "react";
import Footer from "./Footer";
import Topbar from "./Topbar";
import Transition from "./Transition";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Topbar />
      <Transition>{children}</Transition>
      <Footer />
    </>
  );
};

export default Layout;

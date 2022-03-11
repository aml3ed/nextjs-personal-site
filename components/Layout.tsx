import { useRouter } from "next/router";
import React, { useRef } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Footer from "./Footer";
import Topbar from "./Topbar";

const Layout: React.FC = ({ children }) => {
  const router = useRouter();
  const nodeRef = useRef(null);

  return (
    <>
      <Topbar />
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={router.pathname}
          classNames="page"
          timeout={400}
          unmountOnExit
          nodeRef={nodeRef}
        >
          <main>{children}</main>
        </CSSTransition>
      </SwitchTransition>
      <Footer />
    </>
  );
};

export default Layout;

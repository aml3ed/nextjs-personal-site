import { useRouter } from "next/router";
import React, { useRef } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const Transition: React.FC = ({ children }) => {
  const router = useRouter();
  const nodeRef = useRef(null);
  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={router.pathname}
        classNames="page"
        timeout={400}
        unmountOnExit
        nodeRef={nodeRef}
      >
        <main ref={nodeRef}>{children}</main>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default Transition;

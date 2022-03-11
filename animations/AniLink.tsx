import classNames from "classnames";
import React from "react";
import { AniComp } from "./AniComp";

const AniLink: React.FC<AniComp> = ({ link, children }) => {
  return (
    <a
      href={link || undefined}
      className={classNames({ noLink: "wave-border bottom inline-block" })}
    >
      {children}
    </a>
  );
};

export default AniLink;

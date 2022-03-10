/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import routes from "../helpers/routes";

const Logo = () => {
  return (
    <div className="inline-flex items-baseline">
      <Link href={routes.index} passHref>
        <a className="logo-image" />
      </Link>
      <Link href={routes.index} passHref>
        <a className="leading-none header-font">REW</a>
      </Link>
    </div>
  );
};

export default Logo;

/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import routes from "../helpers/routes";

const Logo = () => {
  return (
    <Link href={routes.index} passHref>
      <a className="inline-flex items-baseline not-text">
        <div className="logo-image" />
        <div className="leading-none header-font">REW</div>
      </a>
    </Link>
  );
};

export default Logo;

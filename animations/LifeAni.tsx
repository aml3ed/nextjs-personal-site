import gsap from "gsap";
import React, { useLayoutEffect } from "react";
import { AniComp } from "./AniComp";
import AniLink from "./AniLink";

const LifeAni = ({ link }: AniComp) => {
  useLayoutEffect(animate, []);
  return (
    <div className="relative inline-block">
      <div className="absolute -right-13 -top-11">
        <svg
          width="15rem"
          height="100%"
          viewBox="0 0 503.11 98.22"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="top-mont"
            d="M357.86,43.84c-8.41,12.72,21.13,15.88,31.3,26,28.14,11.51-17.3,1.26-31.84-2.15-20-10-12.71-3.71-12.55,6.06-23.57-3-60.41-48.22-56.42-20.9C266,50.64,269,17.18,257.87,32.21c-6.05-34.29-46-5.64-53,9.25,0,0,0,0,0,.08-3.21-1-8.84-2.89-13.13-4.46l.3-.15c20.87-10.75,32.37-28.74,60.28-35,36.66,4.57,72.48,44.34,101.32,32.87,16.36-.24,23,6.76,32.45,11.31,5.08,3.77,15.21,5,21.9,7.73,4.05,4.61,12.73,7.53,20.54,10.76,9,4.77,20.4,7.13,33.09,9.22,12.9,5.94,26.76,11.6,39.06,17.71C488,90.07,477.11,87.14,466,84.28,396.4,73.82,404.05,57.34,357.86,43.84Z"
          />
          <path
            id="middle-mont"
            d="M279.65,89.09C251.14,83.5,227,76.6,207.79,66c-24.27-2-25.55-13.32-36-21.3-26.24,12.14-29.2,13.3-20.67,15.77l-13.44-3.62c3-10.74,23.44-16.71,38.85-24.31,4.86.08,9.94,3.25,15.11,4.51a0,0,0,0,0,0,0c4.29,1.57,9.92,3.41,13.13,4.46h.08l.37,0c17.52,2.23,21.86,11,37.31,13.18,19.63.37,22.93,11.54,34.71,17.28-18.58-1.17-79.81-29.13-84.22-18.19a10.94,10.94,0,0,0,8.15,4.62c20.47,1.46,31.1,9.25,44.12,15.29,4.19,1.2,11.29-.3,15.22.74C265.16,77.46,290.14,91.12,279.65,89.09Z"
          />
          <path
            id="bottom-mont"
            d="M153.32,68.3C145.05,67,142.23,62.22,134,61.63c-7.53-.5-27.07.34-17.27,4.32,37,5,47,9.65,60.81,24.46-4.73,1.37-35-6.14-48.4-7.8a19.86,19.86,0,0,1-4.37-1.15,9,9,0,0,1-3-1.8c-4.6-5.75-18.47-7-27-11.42-23.33,9-53.72,15.41-79.14,22.44,14.89-5.89,27-14.42,43.67-18.9,4.58-.27,11,1.65,14.11-.36,26.22-11,27-29.42,64.28-14.53l13.44,3.62c5.12,1.47,14.39,3.42,25.22,8.5C197.94,83.27,171.09,72.31,153.32,68.3Z"
          />
        </svg>
      </div>
      <h2 className="leading-0.75">
        <AniLink link={link}>charlottesville, va</AniLink>
      </h2>
    </div>
  );
};

function animate() {
  const timeline = gsap.timeline({ repeat: -1, yoyo: true });
  const scale = 0.47;
  timeline
    .to("#top-mont", {
      x: -(10 * scale),
      ease: "power1.inOut",
      duration: 2
    })
    .to(
      "#middle-mont",
      {
        x: 12 * scale,
        ease: "power1.inOut",
        duration: 2
      },
      "<"
    )
    .to(
      "#bottom-mont",
      {
        x: 41 * scale,
        ease: "power1.inOut",
        duration: 2
      },
      "<"
    )
    .timeScale(0.5);
}

export default LifeAni;

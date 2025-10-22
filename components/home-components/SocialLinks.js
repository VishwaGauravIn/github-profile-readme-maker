import React from "react";
import AnchorWithSVG from "../elements/anchor/AnchorWithSVG";

export default function SocialLinks() {
  return (
    <div className="flex flex-col-reverse md:flex-row my-8 text-green-300">
      <div className="w-full md:w-6/12 flex flex-col justify-center md:items-end my-6 md:my-0">
        <p className="text-3xl sm:text-4xl md:text-5xl font-medium">
          Our Social Links
        </p>
        <p className="text-gray-500 md:pl-10 my-6 md:text-lg 2xl:text-xl md:text-right">
          We are available on X, LinkedIn, and GitHub. You can connect
          with us to get notification about any new feature we add, any cool
          product we create or get early access of some cool projects !
        </p>
        <div className="flex flex-row flex-wrap justify-center md:items-end">
          <AnchorWithSVG
            url="https://linkedin.com/in/VishwaGauravIn"
            title="LinkedIn"
          />
          <AnchorWithSVG
            url="https://x.com/VishwaGauravIn"
            title="X"
          />
          <AnchorWithSVG
            url="https://github.com/VishwaGauravIn"
            title="GitHub"
          />
          <AnchorWithSVG
            url="https://instagram.com/VishwaGauravIn"
            title="Instagram"
          />
        </div>
      </div>
      <div className="w-full md:w-6/12 flex flex-col justify-center items-center">
        <img
          src="/socials.svg"
          alt=""
          className="w-10/12 aspect-square select-none pointer-events-none -rotate-3"
          draggable="false"
        />
      </div>
    </div>
  );
}

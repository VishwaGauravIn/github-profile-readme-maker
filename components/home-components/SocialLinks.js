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
          We are available on Twitter, LinkedIn, and GitHub. You can connect with us to get notification about any new feature we add, any cool product we create or get early access of some cool projects !
        </p>
        <div className="flex flex-row flex-wrap justify-center md:items-end">
          <AnchorWithSVG
            url="https://linkedin.com/in/VishwaGauravIn"
            title="LinkedIn"
            d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
          />
          <AnchorWithSVG
            url="https://twitter.com/VishwaGauravIn"
            title="Twitter"
            d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
          />
          <AnchorWithSVG
            url="https://github.com/VishwaGauravIn"
            title="GitHub"
            d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
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

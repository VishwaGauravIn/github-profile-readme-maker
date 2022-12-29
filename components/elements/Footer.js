import React from "react";
import { GITHUB_SVG, INSTAGRAM_SVG, LINKEDIN_SVG, TWITTER_SVG } from "./SVG";

export default function Footer() {
  return (
    <div className="flex flex-col w-full justify-center items-center pt-6 pb-2">
      <div className="flex flex-row flex-wrap space-x-2">
        {/* Twitter */}
        <a
          className="bg-blue-500 text-blue-50 mt-3 hover:bg-blue-600 font-semibold uppercase  text-lg p-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150 flex items-center w-max aspect-square"
          href="https://twitter.com/VishwaGauravIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TWITTER_SVG size={4} />
        </a>
        {/* GitHub */}
        <a
          className="bg-violet-500 text-violet-50 mt-3 hover:bg-violet-600 font-semibold uppercase  text-lg p-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex items-center w-max aspect-square"
          href="https://github.com/VishwaGauravIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GITHUB_SVG size={4} />
        </a>
        {/* LinkedIn */}
        <a
          className="bg-blue-600 text-blue-50 mt-3 hover:bg-blue-700 font-semibold uppercase  text-lg p-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex items-center w-max aspect-square"
          href="https://www.linkedin.com/in/VishwaGauravIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LINKEDIN_SVG size={4} />
        </a>
        {/* Instagram */}
        <a
          className="bg-rose-500 text-fuchsia-50 mt-3 hover:bg-rose-600 font-semibold uppercase  text-lg p-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex items-center w-max aspect-square"
          href="https://www.instagram.com/VishwaGauravIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <INSTAGRAM_SVG size={4} />
        </a>
      </div>
      <div className="w-full flex justify-center items-center text-green-200">
        <a
          href="https://itsvg.in"
          className="opacity-75 hover:opacity-95 mt-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          {"</>"} & Crafted with&nbsp;💛&nbsp;Vishwa Gaurav
        </a>
      </div>
    </div>
  );
}

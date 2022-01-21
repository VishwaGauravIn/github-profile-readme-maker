import React from "react";
import AnimatedText from "../elements/AnimatedText";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row mt-28">
      <div className="flex flex-col w-full md:w-6/12">
        <p className="text-8xl">Best Profile Generator</p>
        <div className="flex mt-16 items-center">
          <input
            type="text"
            name=""
            id=""
            className="border-b-2 border-green-200 bg-transparent w-11/12 md:w-7/12 text-3xl outline-none focus:border-green-300 focus:border-b-4 inline"
            placeholder="Enter Your GitHub Username"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
        <div className="mt-10">
          <AnimatedText />
        </div>
      </div>
      <div className="flex w-full md:w-6/12"></div>
    </div>
  );
}

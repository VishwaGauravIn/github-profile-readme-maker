import React from "react";
import { BUY_ME_A_COFFEE_SVG } from "./elements/SVG";

export default function NavBar() {
  return (
    <div className="w-full flex text-green-300 items-center relative">
      <img src="/logo.png" alt="" className="w-8 h-8 mr-2" />
      <p className="text-4xl font-medium text-green-300">GPRM</p>
      <a
        href="https://www.buymeacoffee.com/VishwaGauravIn"
        className="flex absolute right-0 justify-center items-center p-2 px-6 bg-green-300 text-green-900 font-semibold rounded-full shadow-lg hover:shadow-green-300/30 sm:hover:scale-[1.02] transition-all ease-in-out duration-100 scale-75 -mr-6 md:mr-0 sm:scale-100"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BUY_ME_A_COFFEE_SVG />
        Donate us
      </a>
    </div>
  );
}

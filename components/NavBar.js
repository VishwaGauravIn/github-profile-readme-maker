import React from "react";
import { BUY_ME_A_COFFEE_SVG } from "./elements/SVG";

export default function NavBar() {
  return (
    <div className="gap-1 w-full flex  items-center relative">
      <img src="/logo_bdao.png" alt="logo" className="w-20 h-12 mr-2" />
      <p className="text-4xl font-medium text-white">
        Builder Profile <span className="text-white text-sm">inspired by</span>
      </p>
      <img src="/keypom.png" alt="logo" className="w-20 h-8 mr-2" />
    </div>
  );
}

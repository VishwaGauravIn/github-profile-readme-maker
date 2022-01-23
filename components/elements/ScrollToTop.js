import { ArrowUpIcon } from "@heroicons/react/outline";
import React from "react";

export default function ScrollToTop() {
  // When the user clicks on the button, scroll to the top of the document
  //   Smooth Varient
  function topFunction() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="w-full flex justify-end">
      <button
        className="p-4 rounded-full bg-green-300 text-zinc-800 brightness-75 hover:brightness-90 transition-all ease-in-out duration-200 active:scale-95"
        onClick={() => topFunction()}
      >
        <ArrowUpIcon className="h-6 w-6" />
      </button>
    </div>
  );
}

import React from "react";

export default function NextButton({onClick}) {
  return (
    <button className="relative inline-block group text-green-100" onClick={onClick}>

      <span className="relative inline-block px-6 py-3 font-bold tracking-widest uppercase border-2 hover:border-green-200 border-green-300 rounded-lg">
        Next
      </span>
    </button>
  );
}

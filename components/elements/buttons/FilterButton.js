import React from "react";

export default function FilterButton({title, onClick}) {
  return (
    <button
      className="p-1 px-4 ring-2 ring-green-300 hover:ring-green-200 active:scale-95 transition-all ease-in-out duration-200 md:ml-3 m-2 md:m-0 rounded-sm text-base"
      onClick={onClick}
    >
      {title}
    </button>
  );
}

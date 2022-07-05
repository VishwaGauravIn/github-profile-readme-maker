import React from "react";

export default function FilterButton({ title, onClick, chk }) {
  return (
    <button
      className={
        chk
          ? "p-1 px-4 ring-2 bg-green-200 text-green-900 ring-green-900 hover:ring-green-800 active:scale-95 transition-all ease-in-out duration-200 md:ml-3 m-2 md:m-0 rounded-sm text-base"
          : "p-1 px-4 ring-2 ring-green-300 hover:ring-green-200 active:scale-95 transition-all ease-in-out duration-200 md:ml-3 m-2 md:m-0 rounded-sm text-base"
      }
      onClick={onClick}
    >
      {title}
    </button>
  );
}

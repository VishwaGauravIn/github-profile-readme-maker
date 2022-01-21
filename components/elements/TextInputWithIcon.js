import React from "react";

export default function TextInputWithIcon({ id, label, children, placeholder }) {
  return (
    <div className="flex">
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        className="w-full md:w-4/12 h-16 p-4 border-b-2 bg-transparent outline-none border-green-200 focus:z-10"
      />

      <label for={id} className="p-5">
        <span className="sr-only"> {label} </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 16"
          stroke="currentColor"
          aria-hidden="true"
          className="w-6 h-6 text-green-200"
        >
          {children}
        </svg>
      </label>
    </div>
  );
}

import React from "react";

export default function ToastSuccess({ title }) {
  return (
    <div className="absolute top-3 left-1/2 -translate-x-1/2 p-2 px-6 bg-green-200 text-green-900 rounded-md flex flex-col md:flex-row w-max text-lg justify-center items-center max-w-[90vw] toast-success">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      {title}
    </div>
  );
}

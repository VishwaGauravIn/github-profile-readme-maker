import React from 'react';

export default function ButtonWithSVG({title, d, onClick}) {
  return <button className="p-2 px-6 flex border-2 hover:border-green-300 border-green-200 shadow-md hover:text-green-300 text-green-200 hover:shadow-green-300/20 active:scale-[0.97] hover:scale-[1.01] transition-all ease-in-out duration-200 rounded-md m-2 group" onClick={onClick}>
  {title}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 ml-1 group-hover:-rotate-12 transition-all ease-in-out duration-200"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d={d}
    />
  </svg>
</button>;
}

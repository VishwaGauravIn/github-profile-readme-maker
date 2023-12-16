import React from "react";

export default function AnchorWithGivenSvg({ url, title, svg }) {
  return (
    <a
      href={url}
      className="flex justify-center items-center p-3 px-6 w-max bg-green-300 text-green-900 font-semibold rounded-full shadow-lg hover:shadow-green-300/30 hover:scale-[1.02] transition-all ease-in-out duration-100 sm:scale-100 m-1.5"
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}&nbsp;
      {svg}
    </a>
  );
}

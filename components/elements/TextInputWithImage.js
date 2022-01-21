import React from "react";

export default function TextInputWithImage({
  id,
  imgUrl,
  placeholder,
}) {
  return (
    <div className="flex w-full md:w-10/12 my-2">
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        className="w-full h-16 p-4 border-b-2 bg-transparent outline-none border-green-300 focus:border-green-200 focus:z-10"
      />

      <label for={id} className="p-5">
        <span className="sr-only"> {id} </span>
            <img src={imgUrl} alt="" className="w-12 aspect-square bg-green-100 rounded-md p-1"/>
      </label>
    </div>
  );
}

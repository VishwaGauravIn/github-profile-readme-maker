import React from "react";

export default function CheckBox({ id, title, defaultChecked }) {
  return (
    <p className="flex w-max items-center my-2">
      <input
        type="checkbox"
        name=""
        id={id}
        defaultChecked={ defaultChecked || false }
        className="w-4 h-4 mr-2 outline-none"
      />
      {title}
    </p>
  );
}

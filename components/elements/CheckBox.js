import React from "react";
import { useGPRMStore } from "../mobx/GPRMcontext";

export default function CheckBox({ id, title }) {
  const gprmStore = useGPRMStore();
  function chk(){
    gprmStore.data.checkbox[id] = document.getElementById(id).checked;
  }
  return (
    <p className="flex w-max items-center my-2">
      <input
        type="checkbox"
        name=""
        id={id}
        defaultChecked={ gprmStore.data.checkbox[id] }
        onChange={chk}
        className="w-4 h-4 mr-2 outline-none"
      />
      {title}
    </p>
  );
}

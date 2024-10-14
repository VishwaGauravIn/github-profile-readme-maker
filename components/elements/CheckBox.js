import React from "react";
import { useProfileMaker } from "../../contexts/profile-maker";

export default function CheckBox({ id, title }) {
  const profileMaker = useProfileMaker();
  function chk() {
    profileMaker.data.checkbox[id] = document.getElementById(id).checked;
  }
  return (
    <p className="flex w-max items-center my-2">
      <input
        type="checkbox"
        name=""
        id={id}
        defaultChecked={profileMaker.data.checkbox[id]}
        onChange={chk}
        className="w-4 h-4 mr-2 outline-none"
      />
      {title}
    </p>
  );
}

import React from 'react';

export default function CheckBox({id,title}) {
  return <p className="flex w-max items-center"><input type="checkbox" name="" id={id} defaultChecked="true" className="w-4 h-4 mr-2 outline-none"/>{title}</p>;
}

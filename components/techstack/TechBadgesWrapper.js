import React from "react";
import BadgeSelect from "../elements/buttons/BadgeSelect";

export default function TechBadgesWrapper({ label, data }) {
  return (
    <>
      {data.length !== 0 && (
        <div className="my-6">
          <p className="flex justify-center text-lg md:text-xl">{label}</p>
          <div className="flex flex-row flex-wrap text-gray-700 md:justify-center md:max-w-[80vw]">
            {data.map((data, key) => (
              <BadgeSelect key={key} label={data.label} url={data.url} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

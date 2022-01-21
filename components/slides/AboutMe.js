import React, { useState } from "react";

export default function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      {isVisible ? (
        <></>
      ) : (
        <div className="flex flex-col items-center">
          <p className="w-full text-center text-3xl my-10">
            Add a small introduction
          </p>
          <div className="flex flex-row w-full">
            <div className="flex w-full md:w-6/12 justify-center items-center">
                <img src="/happy.svg" alt="" className="w-8/12 aspect-square"/>
            </div>
            <div className="flex w-full md:w-6/12"></div>
          </div>
        </div>
      )}
    </>
  );
}

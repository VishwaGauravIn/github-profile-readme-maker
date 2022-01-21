import React, { useState } from "react";
import NextButton from "../elements/NextButton";
import GitHubStats from "./GitHubCards";

export default function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);
  const textareaPlaceholder = 
`🔭 I’m currently working on
👯 I’m looking to collaborate on
🤝 I’m looking for help with
🌱 I’m currently learning
💬 Ask me about
⚡ Fun fact`;
  return (
    <>
      {isVisible ? (
        <GitHubStats/>
      ) : (
        <div className="flex flex-col items-center">
          <p className="w-full text-center text-3xl my-10">
            Add a small introduction
          </p>
          <div className="flex flex-row w-full">
            <div className="flex w-full md:w-6/12 justify-center items-center">
              <img src="/happy.svg" alt="" className="w-8/12 aspect-square select-none pointer-events-none" draggable="false"/>
            </div>
            <div className="flex flex-col w-full md:w-6/12">
              <p className="text-5xl font-semibold text-green-300">About Me :</p>
              <textarea
                name=""
                id=""
                className="w-full bg-transparent h-96 text-xl p-4 outline-none ring-2 ring-green-300/50 focus:ring-green-300/75 rounded-md my-10 resize-none"
                placeholder={textareaPlaceholder}
              ></textarea>
              <NextButton onClick={()=> setIsVisible(true)}/>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

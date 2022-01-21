import React, { useState } from "react";
import NextButton from "../elements/NextButton";
import GitHubStats from "./GitHubCards";

export default function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);
  const textareaPlaceholder = `🔭 I’m currently working on
👯 I’m looking to collaborate on
🤝 I’m looking for help with
🌱 I’m currently learning
💬 Ask me about
⚡ Fun fact
You can Write this in Markdown format too`;

  function onNext() {
    if (document.getElementById("aboutme").textContent != "") {
      aboutme = `# About Me :
${document.getElementById("aboutme").textContent}
`;
    }
    setIsVisible(true);
  }
  return (
    <>
      {isVisible ? (
        <GitHubStats />
      ) : (
        <div className="flex flex-col items-center fade-on-appear">
          <p className="w-full text-center text-3xl my-6 md:my-10">
            Add a small introduction
          </p>
          <div className="flex flex-col md:flex-row w-full">
            <div className="flex w-full md:w-6/12 justify-center items-center mb-4 md:mb-0">
              <img
                src="/happy.svg"
                alt=""
                className="w-8/12 aspect-square select-none pointer-events-none"
                draggable="false"
              />
            </div>
            <div className="flex flex-col w-full md:w-6/12">
              <p className="text-4xl md:text-5xl font-semibold text-green-300">
                About Me :
              </p>
              <textarea
                name=""
                id="aboutme"
                className="w-full bg-transparent h-72 md:h-96 text-base sm:text-lg md:text-xl p-4 outline-none ring-2 ring-green-300/50 focus:ring-green-300/75 rounded-md my-6 md:my-10 resize-none"
                placeholder={textareaPlaceholder}
                autoFocus="true"
              ></textarea>
              <NextButton onClick={() => onNext()} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export var aboutme = ``;

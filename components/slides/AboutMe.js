import React, { useState } from "react";
import NextButton from "../elements/buttons/NextButton";
import Pagination from "../elements/Pagination";
import { useGPRMStore } from "../mobx/GPRMcontext";
import { useObserver } from "mobx-react";
import GitHubStats from "./GitHubCards";
import { LightBulbIcon } from "@heroicons/react/outline";
import FeedbackButton from "../elements/FeedbackButton";

export default function AboutMe({ back }) {
  const [isVisible, setIsVisible] = useState(false);
  const gprmStore = useGPRMStore();
  const [aboutme, setAboutme] = useState(gprmStore.data.aboutme);
  const textareaPlaceholder = `🔭 I’m currently working on
👯 I’m looking to collaborate on
🤝 I’m looking for help with
🌱 I’m currently learning
💬 Ask me about
⚡ Fun fact`;

  function onNext() {
    if (aboutme != ``) {
      gprmStore.data.aboutme = aboutme;
    }
    setIsVisible(true);
  }
  return useObserver(() => (
    <>
      {isVisible ? (
        <GitHubStats back={() => setIsVisible(false)} />
      ) : (
        <div className="flex flex-col items-center fade-on-appear">
          <button
            className="left-0 absolute m-10 opacity-80 hover:opacity-100 transition-all ease-in-out outline-none"
            onClick={back}
          >
            ◄ Go Back
          </button>
          <p className="w-full text-center text-3xl my-6 md:my-10 mt-20">
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
            <div className="flex flex-col w-full md:w-6/12 items-center">
              <p className="text-4xl md:text-5xl font-semibold text-green-300">
                About Me :
              </p>
              <textarea
                name=""
                id="aboutme"
                className="w-full bg-transparent h-72 md:h-96 text-base sm:text-lg md:text-xl p-4 outline-none ring-2 ring-green-300/50 focus:ring-green-300/75 rounded-md my-6 md:my-10 resize-none sm:whitespace-pre"
                placeholder={textareaPlaceholder}
                value={aboutme}
                onChange={(e) => setAboutme(e.target.value)}
                autoFocus={true}
              ></textarea>
              <div className="flex ">
                <button
                  className="mr-4 opacity-60 hover:opacity-80"
                  title="Load Template"
                  onClick={() => setAboutme(textareaPlaceholder)}
                >
                  <LightBulbIcon className="w-6 stroke-1"></LightBulbIcon>
                </button>
                <NextButton onClick={() => onNext()} />
              </div>
            </div>
          </div>
          <Pagination val={1} />
          <FeedbackButton />
        </div>
      )}
    </>
  ));
}

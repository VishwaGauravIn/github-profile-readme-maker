import React, { useState } from "react";
import NextButton from "../elements/buttons/NextButton";
import Pagination from "../elements/Pagination";
import { useObserver } from "mobx-react";
import GitHubStats from "./GitHubCards";
import { LightBulbIcon } from "@heroicons/react/outline";
import { useProfileMaker } from "../../contexts/profile-maker";
export default function AboutMe({ back }) {
  const [isVisible, setIsVisible] = useState(false);
  const profileMaker = useProfileMaker();
  const [aboutme, setAboutme] = useState(profileMaker.data.aboutme);
  const [name, setName] = useState(profileMaker.data.name);
  const [profileImage, setProfileImage] = useState(
    profileMaker.data.profileImage
  );
  const [backgroundImage, setBackgroundImage] = useState(
    profileMaker.data.backgroundImage
  );
  const textareaPlaceholder = `🔭 I’m currently working on
👯 I’m looking to collaborate on
🤝 I’m looking for help with
🌱 I’m currently learning
💬 Ask me about
⚡ Fun fact`;

  function onNext() {
    if (
      aboutme != `` &&
      name != `` &&
      profileImage != `` &&
      backgroundImage != ``
    ) {
      profileMaker.data.aboutme = aboutme;
      profileMaker.data.name = name;
      profileMaker.data.profileImage = profileImage;
      profileMaker.data.backgroundImage = backgroundImage;
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
          <div className="flex flex-col md:flex-row w-full justify-center">
            <div className="flex flex-col w-full md:w-6/12 items-center">
              <div className="flex flex-row w-full gap-6 items-center justify-between">
                <div className="w-[50%]">
                  <p className="text-4xl md:text-xl font-semibold text-[#ECA227]">
                    Your Name :
                  </p>
                  <input
                    name="name"
                    className="w-full bg-transparent text-base sm:text-lg md:text-xl p-4 outline-none ring-2 ring-[#ECA227] focus:ring-white rounded-md my-6 md:my-10 resize-none whitespace-pre"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoFocus
                  />
                  <p className="text-4xl md:text-xl font-semibold text-[#ECA227]">
                    Profile Image URL :
                  </p>
                  <input
                    name="profileImage"
                    className="w-full bg-transparent text-base sm:text-lg md:text-xl p-4 outline-none ring-2 ring-[#ECA227] focus:ring-white rounded-md my-6 md:my-10 resize-none whitespace-pre"
                    placeholder="Your profile image url"
                    value={profileImage}
                    onChange={(e) => setProfileImage(e.target.value)}
                    autoFocus
                  />
                  <p className="text-4xl md:text-xl font-semibold text-[#ECA227]">
                    Background Image URL :
                  </p>
                  <input
                    name="profileImage"
                    className="w-full bg-transparent text-base sm:text-lg md:text-xl p-4 outline-none ring-2 ring-[#ECA227] focus:ring-white rounded-md my-6 md:my-10 resize-none whitespace-pre"
                    placeholder="Your background image url"
                    value={backgroundImage}
                    onChange={(e) => setBackgroundImage(e.target.value)}
                    autoFocus
                  />
                </div>
                <div className="w-[50%]">
                  <p className="text-4xl md:text-xl font-semibold text-[#ECA227]">
                    About Me :
                  </p>
                  <textarea
                    name=""
                    id="aboutme"
                    className="w-full bg-transparent h-72 md:h-96 text-base sm:text-lg md:text-xl p-4 outline-none ring-2 ring-[#ECA227] focus:ring-white rounded-md my-6 md:my-10 resize-none whitespace-pre"
                    placeholder={textareaPlaceholder}
                    value={aboutme}
                    onChange={(e) => setAboutme(e.target.value)}
                  ></textarea>
                </div>
              </div>
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
          {/* <FeedbackButton /> */}
        </div>
      )}
    </>
  ));
}

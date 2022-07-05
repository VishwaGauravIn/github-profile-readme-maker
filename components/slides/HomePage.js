import React, { useState } from "react";
import AnimatedText from "../elements/AnimatedText";
import Features from "../home-components/Features";
import GitHubAvailability from "../home-components/GitHubAvailability";
import ToastError from "../elements/toaster/ToastError";
import AboutMe from "./AboutMe";
import FAQ from "../home-components/FAQ";
import Credits from "../home-components/Credits";
import SocialLinks from "../home-components/SocialLinks";
import ScrollToTop from "../elements/ScrollToTop";
import { RIGHT_ARROW_SVG } from "../elements/SVG";
import { useGPRMStore } from "../mobx/GPRMcontext";
import { useObserver } from "mobx-react";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const gprmStore = useGPRMStore();
  const [input, setInput] = useState(gprmStore.data.username);
  function onNext() {
    if (input != "" && input.replace(/ /g, "") != "") {
      gprmStore.data.username = input;
      setIsVisible(true);
      topFunction();
    } else {
      invalidUsername();
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  function invalidUsername() {
    if (alertVisible !== true) {
      setAlertVisible(true);
      setTimeout(() => {
        setAlertVisible(false);
      }, 4400);
    }
  }
  return useObserver(() => (
    <>
      {isVisible ? (
        <AboutMe back={() => setIsVisible(false)} />
      ) : (
        <div className="scroll-smooth">
          <div className="w-full flex flex-col md:flex-row py-16 md:py-28 min-h-[90vh] items-center relative">
            <div className="flex flex-col w-full md:w-6/12 relative">
              <p className="text-6xl md:text-7xl 2xl:text-8xl">
                Best Profile Generator
              </p>
              {/* Text Input */}
              <div className="flex flex-col sm:flex-row mt-8 md:my-16 2xl:my-20 items-center">
                <form className="w-full" onSubmit={onNext}>
                  <input
                    type="text"
                    value={input}
                    required={true}
                    onChange={(e) => setInput(e.target.value)}
                    autoFocus="true"
                    className="border-b-2 border-green-200 bg-transparent w-full sm:w-11/12 md:w-10/12 lg:w-8/12 text-xl sm:text-3xl md:text-xl lg:text-2xl 2xl:text-3xl outline-none focus:border-green-300 focus:border-b-4 inline"
                    placeholder="Enter Your GitHub Username"
                  />
                  <button type="Submit">
                    <RIGHT_ARROW_SVG />
                  </button>
                </form>
              </div>
              <AnimatedText />
            </div>
            <div className="flex w-full mt-16 md:mt-0 md:w-6/12 justify-center">
              <img
                src="/hpill.svg"
                alt=""
                className="w-full sm:w-8/12 aspect-square select-none pointer-events-none"
                draggable="false"
              />
            </div>
          </div>
          {alertVisible && (
            <ToastError title="Enter a Valid GitHub Username !" />
          )}
          <Features />
          <SocialLinks />
          <GitHubAvailability />
          <FAQ />
          <Credits />
          <ScrollToTop />
        </div>
      )}
    </>
  ));
}

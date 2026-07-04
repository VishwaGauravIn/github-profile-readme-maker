import React, { useState } from "react";
import AnimatedText from "../elements/AnimatedText";
import Features from "../home-components/Features";
import GitHubAvailability from "../home-components/GitHubAvailability";
import ToastError from "../elements/toaster/ToastError";
import AboutMe from "./AboutMe";
import ResumeUpload from "./ResumeUpload";
import FAQ from "../home-components/FAQ";
import Credits from "../home-components/Credits";
import SocialLinks from "../home-components/SocialLinks";
import ScrollToTop from "../elements/ScrollToTop";
import { RIGHT_ARROW_SVG } from "../elements/SVG";
import { useGPRMStore } from "../mobx/GPRMcontext";
import { useObserver } from "mobx-react";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
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
      {showUpload ? (
        <ResumeUpload back={() => setShowUpload(false)} />
      ) : isVisible ? (
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
                    autoFocus={true}
                    className="border-b-2 border-green-200 bg-transparent w-full sm:w-11/12 md:w-10/12 lg:w-8/12 text-xl sm:text-3xl md:text-xl lg:text-2xl 2xl:text-3xl outline-none focus:border-green-300 focus:border-b-4 inline"
                    placeholder="Enter Your GitHub Username"
                  />
                  <button type="Submit">
                    <RIGHT_ARROW_SVG />
                  </button>
                </form>
              </div>
              {/* Upload Resume CTA */}
              <div className="flex items-center gap-3 mt-2 mb-2">
                <div className="h-[1px] w-8 bg-green-700" />
                <span className="text-zinc-500 text-sm">or</span>
                <div className="h-[1px] flex-1 bg-green-700" />
              </div>
              <button
                id="upload-resume-btn"
                onClick={() => setShowUpload(true)}
                className="flex items-center gap-2 w-max text-sm sm:text-base border border-green-400/50 text-green-300 px-5 py-2 rounded-full hover:bg-green-400/10 hover:border-green-300 transition-all duration-200 active:scale-95"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Upload Resume — AI fills your profile
              </button>
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

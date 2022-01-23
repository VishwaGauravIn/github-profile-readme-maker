import React, { useEffect, useState } from "react";
import AnimatedText from "../elements/AnimatedText";
import Features from "../home-components/Features";
import GitHubAvailability from "../home-components/GitHubAvailability";
import ToastError from "../elements/toaster/ToastError";
import AboutMe from "./AboutMe";
import FAQ from "../home-components/FAQ";
import Credits from "../home-components/Credits";
import SocialLinks from "../home-components/SocialLinks";
import ScrollToTop from "../elements/ScrollToTop";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  // Submit on clicking Enter Button
  useEffect(() => {
    // Get the input field
    var input = document.getElementById("username");

    // Execute a function when the user releases a key on the keyboard
    input.addEventListener("keyup", function (event) {
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("proceed").click();
      }
    });
  }, []);
  function onNext() {
    let user = document.getElementById("username").value;
    if (user != "") {
      if (user.replace(/ /g, "") != "") {
        username = user;
        setIsVisible(true);
        topFunction();
      } else {
        invalidUsername();
      }
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
  return (
    <>
      {isVisible ? (
        <AboutMe />
      ) : (
        <div className="scroll-smooth">
          <div className="w-full flex flex-col md:flex-row py-16 md:py-28 min-h-[90vh] items-center relative">
            <div className="flex flex-col w-full md:w-6/12 relative">
              <p className="text-6xl md:text-7xl 2xl:text-8xl">
                Best Profile Generator
              </p>
              {/* Text Input */}
              <div className="flex flex-col sm:flex-row mt-8 md:my-16 2xl:my-20 items-center">
                <input
                  type="text"
                  name=""
                  autoFocus="true"
                  id="username"
                  className="border-b-2 border-green-200 bg-transparent w-full sm:w-11/12 md:w-10/12 lg:w-8/12 text-xl sm:text-3xl md:text-xl lg:text-2xl 2xl:text-3xl outline-none focus:border-green-300 focus:border-b-4 inline"
                  placeholder="Enter Your GitHub Username"
                />
                <button id="proceed" onClick={() => onNext()}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-12 cursor-pointer transition-all mt-4 sm:mt-0 hover:ml-1 duration-200 ease-linear"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
              <AnimatedText />
            </div>
            <div className="flex w-full mt-16 md:mt-0 md:w-6/12 justify-center">
              <img
                src="/hpill.svg"
                alt=""
                className="w-full sm:w-7/12 aspect-square select-none pointer-events-none"
                draggable="false"
              />
            </div>
          </div>
          {alertVisible && (
            <ToastError title="Enter a Valid GitHub Username !" />
          )}
          <Features />
          <GitHubAvailability />
          <SocialLinks />
          <Credits />
          {/* <FAQ/> */}
          <ScrollToTop />
        </div>
      )}
    </>
  );
}
export var username = "";

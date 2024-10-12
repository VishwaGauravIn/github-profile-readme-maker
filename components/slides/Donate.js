import React, { useState } from "react";
import NextButton from "../elements/buttons/NextButton";
import Pagination from "../elements/Pagination";
import TextInputWithImage from "../elements/textinput/TextInputWithImage";
import { useGPRMStore } from "../mobx/GPRMcontext";
import { socials } from "./Socials";
import { githubstats } from "./GitHubCards";

import Preview from "./Preview";

export default function Donate({ back }) {
  const [isVisible, setIsVisible] = useState(false);
  function onNext() {
    donate = "";
    if (document.getElementById("buymeacoffee").value != "") {
      donate =
        donate +
        `[![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/${
          document.getElementById("buymeacoffee").value
        }) `;
    }
    if (document.getElementById("paypal").value != "") {
      donate =
        donate +
        `[![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/${
          document.getElementById("paypal").value
        }) `;
    }
    if (document.getElementById("patreon").value != "") {
      donate =
        donate +
        `[![Patreon](https://img.shields.io/badge/Patreon-F96854?style=for-the-badge&logo=patreon&logoColor=white)](https://patreon.com/${
          document.getElementById("patreon").value
        }) `;
    }
    if (document.getElementById("kofi").value != "") {
      donate =
        donate +
        `[![Ko-Fi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/${
          document.getElementById("kofi").value
        }) `;
    }
    createFinalData();
    setIsVisible(true);
  }

  const gprmStore = useGPRMStore();

  function createFinalData() {
    var finaldata = "";
    if (gprmStore.data.aboutme != ``) {
      finaldata =
        finaldata +
        `# 💫 About Me:
${gprmStore.data.aboutme.replace(/(?:\r\n|\r|\n)/g, "<br>")}

`;
    }
    if (socials != ``) {
      finaldata =
        finaldata +
        `
## 🌐 Socials:
${socials}
`;
    }
    if (gprmStore.data.tech != ``) {
      finaldata =
        finaldata +
        `
# 💻 Tech Stack:
${gprmStore.data.tech
  .join(" ")
  .replaceAll("for-the-badge", gprmStore.data.badge_theme)}
`;
    }
    finaldata = finaldata + githubstats;
    if (donate != ``) {
      finaldata =
        finaldata +
        `
  ## 💰 You can help me by Donating
  ${donate}

  `;
    }
    finaldata = `${finaldata}
<!-- Proudly created with GPRM ( https://gprm.itsvg.in ) -->`;
    gprmStore.data.finalData = finaldata;
  }

  return (
    <>
      {isVisible ? (
        <Preview back={() => setIsVisible(false)} />
      ) : (
        <div className="flex flex-col items-center fade-on-appear">
          <button
            className="left-0 absolute m-10 opacity-80 hover:opacity-100 transition-all ease-in-out outline-none"
            onClick={back}
          >
            ◄ Go Back
          </button>
          <p className="w-full text-center text-3xl my-10 mt-20">
            Let People Help You via Donations
          </p>
          <div className="flex flex-col md:flex-row w-full">
            <div className="flex w-full md:w-6/12 justify-center items-center">
              <img
                src="/donate.svg"
                alt=""
                className="w-8/12 aspect-square select-none pointer-events-none -rotate-3"
                draggable="false"
              />
            </div>
            <div className="flex flex-col w-full md:w-6/12">
              <p className="text-4xl md:text-5xl font-semibold text-green-300">
                Donate :
              </p>
              <TextInputWithImage
                id="buymeacoffee"
                placeholder="Buy Me a Coffee Username"
                imgUrl="/bmc.svg"
              />
              <TextInputWithImage
                id="paypal"
                placeholder="PayPal.Me Username"
                imgUrl="/paypal.svg"
              />
              <TextInputWithImage
                id="patreon"
                placeholder="Patreon Username"
                imgUrl="/patreon.svg"
              />
              <TextInputWithImage
                id="kofi"
                placeholder="Ko-Fi Username"
                imgUrl="/kofi.svg"
              />
              <div className="flex w-full md:w-10/12 justify-center md:justify-end mt-4">
                <NextButton onClick={() => onNext()} />
                <Pagination val={5} />
                {/* <FeedbackButton /> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export var donate = ``;

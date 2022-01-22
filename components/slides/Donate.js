import React, { useState } from "react";
import NextButton from "../elements/NextButton";
import TextInputWithImage from "../elements/TextInputWithImage";
import Extras from "./Extras";

export default function Donate() {
  const [isVisible, setIsVisible] = useState(false);
  function onNext() {
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
    setIsVisible(true)
  }
  return (
      <>
      {isVisible ? (
          <Extras/>
      ) : (
        <div className="flex flex-col items-center fade-on-appear">
          <p className="w-full text-center text-3xl my-10">
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
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export var donate = ``;

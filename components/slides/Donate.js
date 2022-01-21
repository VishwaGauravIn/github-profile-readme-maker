import React, { useState } from "react";
import NextButton from "../elements/NextButton";
import TextInputWithImage from "../elements/TextInputWithImage";

export default function Donate() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      {isVisible ? (
        <></>
      ) : (
        <div className="flex flex-col items-center fade-on-appear">
          <p className="w-full text-center text-3xl my-10">
            Let People Help You via Donations
          </p>
          <div className="flex flex-row w-full">
            <div className="flex w-full md:w-6/12 justify-center items-center">
              <img
                src="/donate.svg"
                alt=""
                className="w-8/12 aspect-square select-none pointer-events-none -rotate-3"
                draggable="false"
              />
            </div>
            <div className="flex flex-col w-full md:w-6/12">
              <p className="text-5xl font-semibold text-green-300">Donate :</p>
              <TextInputWithImage
                id="buymeacoffee"
                placeholder="Buy Me a Coffee Full Url"
                imgUrl="/bmc.svg"
              />
              <TextInputWithImage
                id="paypal"
                placeholder="PayPal Full Url"
                imgUrl="/paypal.svg"
              />
              <TextInputWithImage
                id="patreon"
                placeholder="Patreon Full Url"
                imgUrl="/patreon.svg"
              />
              <TextInputWithImage
                id="kofi"
                placeholder="Ko-Fi Full Url"
                imgUrl="/kofi.svg"
              />
              <div className="flex w-full md:w-10/12 justify-end mt-4">
                <NextButton onClick={() => setIsVisible(true)} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

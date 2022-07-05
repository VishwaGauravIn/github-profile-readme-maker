import React from "react";
import AnchorWithSVG from "../elements/anchor/AnchorWithSVG";
import { GITHUB_LOGO_LARGE_SVG } from "../elements/SVG";

export default function GitHubAvailability() {
  return (
    <div className="flex flex-col md:flex-row my-8 text-green-300">
      <div className="w-full md:w-6/12 flex flex-col justify-center items-center">
        <GITHUB_LOGO_LARGE_SVG />
      </div>
      <div className="w-full md:w-6/12 flex flex-col justify-center my-6 md:my-0">
        <p className="text-3xl sm:text-4xl md:text-5xl font-medium">
          We&apos;re Open Source
        </p>
        <p className="text-gray-500 md:pr-10 my-6 md:text-lg 2xl:text-xl">
          Yes you heard right, this website is open source and you can find code
          of this website on GitHub. You can request a feature, contribute to
          project by adding feedbacks and mentioning bugs if they exist.
          Licensed under GPL-3.0 ©VishwaGauravIn
        </p>
        <AnchorWithSVG
          url="https://github.com/VishwaGauravIn/github-profile-readme-maker"
          title="Visit GitHub"
        />
      </div>
    </div>
  );
}

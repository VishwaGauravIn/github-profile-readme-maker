import React, { useState } from "react";
import CheckBox from "../elements/CheckBox";
import FilterButton from "../elements/buttons/FilterButton";
import NextButton from "../elements/buttons/NextButton";
import { githubstats } from "./GitHubCards";
import { username } from "./HomePage";
import { socials } from "./Socials";
import { donate } from "./Donate";
import Pagination from "../elements/Pagination";
import Preview from "./Preview";
import { useGPRMStore } from "../mobx/GPRMcontext";

export default function Extras({ back }) {
  const [isVisible, setIsVisible] = useState(false);
  const [theme, setTheme] = useState("radical");
  const [border, setBorder] = useState(false);
  const [background, setBackground] = useState(false);
  const [quoteTheme, setQuoteTheme] = useState("radical");
  const [layout, setLayout] = useState("horizontal");
  const [color, setColor] = useState(0);
  const [icon, setIcon] = useState(0);
  const gprmStore = useGPRMStore();
  function changeLayout() {
    if (layout === "horizontal") {
      setLayout("vetical");
    } else {
      setLayout("horizontal");
    }
  }
  function onNext() {
    if (document.getElementById("trophychk").checked === true) {
      extras =
        extras +
        `
## 🏆GitHub Trophies
![](${document.getElementById("trophy").getAttribute("src")})
`;
    }
    if (document.getElementById("quotechk").checked === true) {
      extras =
        extras +
        `
### ✍️Random Dev Quote
![](${document.getElementById("quote").getAttribute("src")})
`;
    }
    if (document.getElementById("memechk").checked === true) {
      extras =
        extras +
        `
### 😂Random Dev Meme
<img src="https://random-memer.herokuapp.com/" width="512px"/>
`;
    }
    if (document.getElementById("visitorschk").checked === true) {
      extras =
        extras +
        `
---
[![](https://visitcount.itsvg.in/api?id=${username}&icon=${icon}&color=${color})](https://visitcount.itsvg.in)
`;
    }
    createFinalData();
    setIsVisible(true);
  }
  function createFinalData() {
    if (gprmStore.data.aboutme != ``) {
      finaldata =
        finaldata +
        `# 💫About Me :
      ${gprmStore.data.aboutme}
      `;
    }
    if (socials != ``) {
      finaldata =
        finaldata +
        `
## 🌐Socials
${socials}
`;
    }
    if (gprmStore.data.tech != ``) {
      finaldata =
        finaldata +
        `
# 💻Tech Stack
${gprmStore.data.tech
  .join(" ")
  .replaceAll("for-the-badge", gprmStore.data.badge_theme)}
`;
    }
    finaldata = finaldata + githubstats + extras;
    if (donate != ``) {
      finaldata =
        finaldata +
        `
  ## 💰You can help me by Donating
  ${donate}

  <!-- Proudly created with GPRM ( https://gprm.itsvg.in ) -->
  `;
    }
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
            Additional Stuffs to add
          </p>
          {/* Options */}
          <div className="flex flex-wrap justify-center items-center">
            Theme:
            <select
              id="theme"
              onChange={() => setTheme(document.getElementById("theme").value)}
              className="bg-transparent py-1 px-2 outline-none"
            >
              {themes.map((item) => {
                return (
                  <option key={item} value={item} className="bg-zinc-900">
                    {item}
                  </option>
                );
              })}
            </select>
            <FilterButton title="Border" onClick={() => setBorder(!border)} />
            <FilterButton
              title="Background"
              onClick={() => setBackground(!background)}
            />
          </div>
          <p className="mt-4 text-green-300 opacity-90">
            please wait for images to load after changing any values
          </p>
          <div className="w-full md:w-8/12 items-center flex flex-col flex-wrap md:my-4">
            <img
              className="m-2 select-none pointer-events-none"
              draggable="false"
              id="trophy"
              src={`https://github-profile-trophy.vercel.app/?username=${username}&theme=${theme}&no-frame=${border}&no-bg=${background}&margin-w=4`}
              alt=""
            />
            <CheckBox id="trophychk" title="Add GitHub Trophies" />
            {/* Visitors Badge */}
            {/* Options */}
            <div className="flex flex-wrap justify-center items-center py-6">
              Color:
              <select
                id="color"
                onChange={() =>
                  setColor(document.getElementById("color").value)
                }
                className="bg-transparent py-1 px-2 outline-none mr-2"
              >
                {colors.map((color, index) => {
                  return (
                    <option key={index} value={index} className="bg-zinc-900">
                      {color}
                    </option>
                  );
                })}
              </select>
              Icon:
              <select
                id="icon"
                onChange={() => setIcon(document.getElementById("icon").value)}
                className="bg-transparent py-1 px-2 outline-none"
              >
                {icons.map((icon, index) => {
                  return (
                    <option key={index} value={index} className="bg-zinc-900">
                      {icon}
                    </option>
                  );
                })}
              </select>
            </div>
            <img
              id="visitors"
              src={`https://visitcount.itsvg.in/api/test?icon=${icon}&color=${color}`}
              alt=""
              className="md:ml-36 mb-4"
            />
            <CheckBox
              id="visitorschk"
              defaultChecked={true}
              title="Add Visitors Count"
            />
            {/* Options */}
            <div className="flex flex-wrap justify-center items-center mt-4 my-2">
              Theme:
              <select
                id="quotetheme"
                onChange={() =>
                  setQuoteTheme(document.getElementById("quotetheme").value)
                }
                className="bg-transparent py-1 px-2 outline-none"
              >
                {quoteThemes.map((item) => {
                  return (
                    <option key={item} value={item} className="bg-zinc-900">
                      {item}
                    </option>
                  );
                })}
              </select>
              <FilterButton title="Layout" onClick={() => changeLayout()} />
            </div>
            <img
              className="m-2 select-none pointer-events-none"
              draggable="false"
              id="quote"
              src={`https://quotes-github-readme.vercel.app/api?type=${layout}&theme=${quoteTheme}`}
              alt=""
            />
            <CheckBox id="quotechk" title="Add Random Dev Quotes" />

            <CheckBox id="memechk" title="Add Random Memes" />
          </div>
          <NextButton onClick={() => onNext()} />
          <Pagination val={6} />
        </div>
      )}
    </>
  );
}

const themes = [
  "flat",
  "onedark",
  "gruvbox",
  "dracula",
  "monokai",
  "chalk",
  "nord",
  "alduin",
  "darkhub",
  "juicyfresh",
  "buddhism",
  "oldie",
  "radical",
  "onestar",
  "discord",
  "algolia",
  "gitdimmed",
  "tokyonight",
  "matrix",
  "apprentice",
  "dark_dimmed",
];

const quoteThemes = [
  "light",
  "dark",
  "radical",
  "merko",
  "gruvbox",
  "tokyonight",
];

const colors = [
  "cyan",
  "blue",
  "amber",
  "green",
  "red",
  "rose",
  "indigo",
  "orange",
  "emerald",
  "teal",
  "pink",
  "fuchsia",
  "neutral",
];

const icons = [
  "default",
  "bar",
  "code",
  "cursor",
  "emoji",
  "eye",
  "fire",
  "heart",
  "bolt",
  "star",
];

export var extras = ``;
export var finaldata = ``;

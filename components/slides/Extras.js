import React, { useState } from "react";
import CheckBox from "../elements/CheckBox";
import FilterButton from "../elements/FilterButton";
import NextButton from "../elements/NextButton";
import { aboutme } from "./AboutMe";
import { githubstats } from "./GitHubCards";
import { username } from "./HomePage";
import { socials } from "./Socials";
import { techbadges } from "./TechStack";
import { donate } from './Donate'
import Pagination from "../elements/Pagination";

export default function Extras() {
  const [isVisible, setIsVisible] = useState(false);
  const [theme, setTheme] = useState("radical");
  const [border, setBorder] = useState(false);
  const [background, setBackground] = useState(false);
  const [quoteTheme, setQuoteTheme] = useState("radical");
  const [layout, setLayout] = useState("horizontal");
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
![](${document.getElementById("visitors").getAttribute("src")})
`;
    }
    createFinalData();
    setIsVisible(true);
  }
  function createFinalData() {
    if (aboutme != ``) {
      finaldata = finaldata + aboutme;
    }
    if (socials != ``) {
      finaldata =
        finaldata +
        `
## 🌐Socials
${socials}
`;
    }
    if (techbadges != ``) {
      finaldata =
        finaldata +
        `
# 💻Tech Stack
${techbadges.join(" ")}
`;
    }
    finaldata = finaldata + githubstats + extras;
    if (donate != ``) {
      finaldata =
        finaldata +
        `
  ## 💰You can help me by Donating
  ${donate}
  `;
    }
    console.log(finaldata)
  }
  return (
    <>
      {isVisible ? (
        <></>
      ) : (
        <div className="flex flex-col items-center fade-on-appear">
          <p className="w-full text-center text-3xl my-10">
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
            {/* Visitors Badge */}
            <img
              className="m-2 select-none pointer-events-none"
              draggable="false"
              id="visitors"
              src={`https://komarev.com/ghpvc/?username=${username}&label=Visitors+Count&color=brightgreen`}
              alt=""
            />
            <CheckBox id="visitorschk" title="Add Visitors Count" />
            <CheckBox id="memechk" title="Add Random Memes" />
          </div>
          <NextButton onClick={() => onNext()} />
          <Pagination val={6}/>
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

export var extras = ``;
export var finaldata = ``;

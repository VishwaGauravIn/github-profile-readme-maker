import React, { useEffect, useState } from "react";
import CheckBox from "../elements/CheckBox";
import FilterButton from "../elements/buttons/FilterButton";
import NextButton from "../elements/buttons/NextButton";
import { githubstats } from "./GitHubCards";
import { socials } from "./Socials";
import { donate } from "./Donate";
import Pagination from "../elements/Pagination";
import Preview from "./Preview";
import { useGPRMStore } from "../mobx/GPRMcontext";
import { useObserver } from "mobx-react";
import FeedbackButton from "../elements/FeedbackButton";

export default function Extras({ back }) {
  const [isVisible, setIsVisible] = useState(false);
  const gprmStore = useGPRMStore();
  const [theme, setTheme] = useState(gprmStore.data.trophy.theme);
  const [border, setBorder] = useState(gprmStore.data.trophy.border);
  const [background, setBackground] = useState(
    gprmStore.data.trophy.background
  );
  const [quoteTheme, setQuoteTheme] = useState(gprmStore.data.quote.quoteTheme);
  const [layout, setLayout] = useState(gprmStore.data.quote.layout);
  const [color, setColor] = useState(gprmStore.data.visitcount.color);
  const [icon, setIcon] = useState(gprmStore.data.visitcount.icon);
  const [topRepoTheme, setTopRepoTheme] = useState(
    gprmStore.data.toprepo.toprepotheme
  );
  useEffect(() => {
    gprmStore.data.trophy.theme = theme;
  }, [theme]);
  useEffect(() => {
    gprmStore.data.trophy.border = border;
  }, [border]);
  useEffect(() => {
    gprmStore.data.trophy.background = background;
  }, [background]);
  useEffect(() => {
    gprmStore.data.visitcount.color = color;
  }, [color]);
  useEffect(() => {
    gprmStore.data.visitcount.icon = icon;
  }, [icon]);
  useEffect(() => {
    gprmStore.data.quote.quoteTheme = quoteTheme;
  }, [quoteTheme]);
  useEffect(() => {
    gprmStore.data.quote.layout = layout;
  }, [layout]);
  useEffect(() => {
    gprmStore.data.toprepo.toprepotheme = topRepoTheme;
  }, [topRepoTheme]);

  function changeLayout() {
    if (layout === "horizontal") {
      setLayout("vetical");
    } else {
      setLayout("horizontal");
    }
  }
  function onNext() {
    extras = "";
    if (document.getElementById("trophychk").checked === true) {
      extras =
        extras +
        `
## 🏆 GitHub Trophies
![](${document.getElementById("trophy").getAttribute("src")})
`;
    }
    //     if (
    //       gprmStore.data.socials.twitter &&
    //       document.getElementById("gtcechk").checked === true
    //     ) {
    //       extras =
    //         extras +
    //         `
    // ## 🐦 Latest Tweet
    // [![](https://gtce.itsvg.in/api?username=${gprmStore.data.socials.twitter})](https://github.com/VishwaGauravIn/github-twitter-card-embed)
    // `;
    //     }
    if (document.getElementById("quotechk").checked === true) {
      extras =
        extras +
        `
### ✍️ Random Dev Quote
![](${document.getElementById("quote").getAttribute("src")})
`;
    }
    if (document.getElementById("toprepochk").checked === true) {
      extras =
        extras +
        `
### 🔝 Top Contributed Repo
![](${document.getElementById("toprepo").getAttribute("src")})
`;
    }
    if (document.getElementById("memechk").checked === true) {
      extras =
        extras +
        `
### 😂 Random Dev Meme
<img src='https://randommeme-five.vercel.app/' style="height: 400px;"/>
`;
    }
    if (document.getElementById("visitorschk").checked === true) {
      extras =
        extras +
        `
---
[![](https://visitcount.itsvg.in/api?id=${gprmStore.data.username}&icon=${icon}&color=${color})](https://visitcount.itsvg.in)
`;
    }

    createFinalData();
    setIsVisible(true);
  }
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
    finaldata = finaldata + githubstats + extras;
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
  return useObserver(() => (
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
          {/* Trophies */}
          {/* Options */}
          <div className="flex flex-wrap justify-center items-center">
            Theme:
            <select
              id="theme"
              value={theme}
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
            <FilterButton
              chk={border}
              title="Border"
              onClick={() => setBorder(!border)}
            />
            <FilterButton
              title="Background"
              chk={background}
              onClick={() => setBackground(!background)}
            />
          </div>
          <p className="mt-4 text-green-300 opacity-90 text-xs text-center sm:text-base">
            please wait for images to load after changing any values
          </p>
          <div className="w-full md:w-8/12 items-center flex flex-col flex-wrap md:my-4">
            <img
              className="m-2 select-none pointer-events-none"
              draggable="false"
              id="trophy"
              src={`https://github-profile-trophy.vercel.app/?username=${
                gprmStore.data.username
              }&theme=${theme}&no-frame=${!border}&no-bg=${!background}&margin-w=4`}
              alt=""
            />
            <CheckBox id="trophychk" title="Add GitHub Trophies" />
          </div>
          <hr className="mt-2 mb-2 w-1/2 opacity-30" />

          {/* Visitors Badge */}
          {/* Options */}
          <div className="flex flex-wrap justify-center items-center py-6">
            Color:
            <select
              id="color"
              value={color}
              onChange={() => setColor(document.getElementById("color").value)}
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
              value={icon}
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
          <CheckBox id="visitorschk" title="Add Visitors Count" />
          <hr className="mt-2 mb-2 w-1/2 opacity-30" />

          {/* Twitter Card */}
          {/* {gprmStore.data.socials.twitter && (
            <>
              <img
                id="visitors"
                src={`https://gtce.itsvg.in/api?username=${gprmStore.data.socials.twitter}`}
                alt=""
                className="mb-4 mt-2"
              />
              <CheckBox id="gtcechk" title="Add Twitter Card" />
              <hr className="mt-2 mb-2 w-1/2 opacity-30" />
            </>
          )} */}

          {/* Quote */}
          {/* Options */}
          <div className="flex flex-wrap justify-center items-center mt-4 my-2">
            Theme:
            <select
              id="quotetheme"
              value={quoteTheme}
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
            <FilterButton
              title={`Layout- ${layout}`}
              onClick={() => changeLayout()}
            />
          </div>
          <img
            className="m-2 select-none pointer-events-none"
            draggable="false"
            id="quote"
            src={`https://quotes-github-readme.vercel.app/api?type=${layout}&theme=${quoteTheme}`}
            alt=""
          />
          <CheckBox id="quotechk" title="Add Random Dev Quotes" />
          <hr className="mt-2 mb-2 w-1/2 opacity-30" />

          {/* Top Contributed Repo */}
          {/* Options */}
          <div className="flex flex-wrap justify-center items-center mt-4 my-2">
            Theme:
            <select
              id="toprepotheme"
              value={topRepoTheme}
              onChange={() =>
                setTopRepoTheme(document.getElementById("toprepotheme").value)
              }
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
          </div>
          <img
            className="m-2 select-none pointer-events-none"
            draggable="false"
            id="toprepo"
            src={`https://github-contributor-stats.vercel.app/api?username=${gprmStore.data.username}&limit=5&theme=${topRepoTheme}&combine_all_yearly_contributions=true`}
            alt=""
          />
          <CheckBox id="toprepochk" title="Add Top Contributed Repo List" />
          <hr className="mt-2 mb-2 w-1/2 opacity-30" />

          <CheckBox id="memechk" title="Add Random Memes" />
          <span className="pb-6" />
          <NextButton onClick={() => onNext()} />
          <Pagination val={6} />
          <FeedbackButton />
        </div>
      )}
    </>
  ));
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
  "dark",
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
